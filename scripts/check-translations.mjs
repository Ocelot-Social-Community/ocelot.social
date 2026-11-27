#!/usr/bin/env node
// Checks that the language versions under docs/ are translations of one another:
//   1. every page exists in every locale; a news article needs English only, the build
//      stubs the other locales with it (docs/.vuepress/config.js),
//   2. the versions of a page share their structure: the heading outline, the number of
//      links and images per section, the front matter keys and the layout values,
//   3. every anchor a page links to exists, on the page itself or on another docs page.
// The wording is not compared, so a typo fix or a rephrasing in one language passes.
//
// With BASE_REF set (a git ref, e.g. origin/master), a page changed in some locales but
// not in the others is reported as a warning: the translation may lag behind the change.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

// The slugify VuePress builds heading ids with, so anchors are checked against real ids.
import { slugify } from '@mdit-vue/shared'

const DOCS = 'docs'
const LOCALES = ['de', 'en', 'es', 'fr']
const REFERENCE = 'en'
const ENGLISH_FALLBACK = 'news/'
// Front matter that sets the layout must not differ; text values (title, tags, …) may.
const LAYOUT_KEYS = ['home', 'article', 'sidebar', 'icon', 'date', 'layout', 'index', 'order', 'dir']
const STUB = 'README.stub.md'

let errors = 0
let warnings = 0
const annotate = (kind, file, line, message) =>
  console.log(`::${kind} file=${file}${line ? `,line=${line}` : ''}::${message}`)
const error = (file, line, message) => {
  errors++
  annotate('error', file, line, message)
}
const warning = (file, line, message) => {
  warnings++
  annotate('warning', file, line, message)
}

const fileOf = (locale, page) => path.posix.join(DOCS, locale, page)

function listPages(locale) {
  const root = path.join(DOCS, locale)
  const pages = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.md') && entry.name !== STUB) {
        pages.push(path.relative(root, full).split(path.sep).join('/'))
      }
    }
  }
  if (fs.existsSync(root)) walk(root)
  return pages
}

// Text of a heading as markdown-it renders it, before slugify.
const headingText = (raw) =>
  raw
    .replace(/<[^>]+>/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim()

function parse(file) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  const frontMatter = {}
  let start = 0
  if (/^---\s*$/.test(lines[0])) {
    const end = lines.findIndex((line, i) => i > 0 && /^---\s*$/.test(line))
    for (const line of lines.slice(1, end)) {
      const match = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/)
      if (match) frontMatter[match[1]] = match[2].trim()
    }
    start = end + 1
  }

  const sections = [{ level: 0, text: '(top)', line: start + 1, links: 0, images: 0 }]
  const ids = new Set()
  const slugCount = new Map()
  const targets = []
  let fence = null
  lines.slice(start).forEach((line, i) => {
    const lineNo = start + i + 1
    const fenceMatch = line.match(/^\s*(```|~~~)/)
    if (fenceMatch) {
      if (!fence) fence = fenceMatch[1]
      else if (fenceMatch[1] === fence) fence = null
      return
    }
    if (fence) return

    const heading = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/)
    if (heading) {
      const explicit = heading[2].match(/\{#([^}]+)\}\s*$/)
      const text = headingText(heading[2].replace(/\{#[^}]+\}\s*$/, ''))
      let id = explicit ? explicit[1] : slugify(text)
      if (!explicit) {
        // markdown-it-anchor numbers repeated slugs: foo, foo-1, foo-2, …
        const seen = slugCount.get(id) ?? 0
        slugCount.set(id, seen + 1)
        if (seen) id = `${id}-${seen}`
      }
      ids.add(id)
      sections.push({ level: heading[1].length, text, line: lineNo, links: 0, images: 0 })
      return
    }

    const section = sections[sections.length - 1]
    for (const match of line.matchAll(/\bid="([^"]+)"/g)) ids.add(match[1])
    for (const match of line.matchAll(/(!?)\[[^\]]*\]\(([^)\s]+)/g)) {
      if (match[1]) section.images++
      else section.links++
      targets.push({ target: match[2], line: lineNo })
    }
    for (const match of line.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
      section.links++
      targets.push({ target: match[1], line: lineNo })
    }
    section.images += (line.match(/<img\s/g) ?? []).length
  })
  return { frontMatter, sections, ids, targets }
}

const pagesByLocale = Object.fromEntries(LOCALES.map((locale) => [locale, new Set(listPages(locale))]))
const allPages = [...new Set(LOCALES.flatMap((locale) => [...pagesByLocale[locale]]))].sort()
const parsed = new Map()
const parsedOf = (locale, page) => {
  const file = fileOf(locale, page)
  if (!parsed.has(file)) parsed.set(file, parse(file))
  return parsed.get(file)
}

// 1. Every page exists in every locale.
for (const page of allPages) {
  const present = LOCALES.filter((locale) => pagesByLocale[locale].has(page))
  const required = page.startsWith(ENGLISH_FALLBACK) ? [REFERENCE] : LOCALES
  for (const locale of required.filter((locale) => !present.includes(locale))) {
    error(fileOf(present[0], page), 1, `missing translation: ${fileOf(locale, page)} does not exist`)
  }
}

// 2. The versions of a page share their structure.
const outline = (sections) => sections.slice(1).map((s) => '#'.repeat(s.level)).join(' ')
for (const page of allPages) {
  const present = LOCALES.filter((locale) => pagesByLocale[locale].has(page))
  const reference = present.includes(REFERENCE) ? REFERENCE : present[0]
  const ref = parsedOf(reference, page)
  const refFile = fileOf(reference, page)

  for (const locale of present.filter((locale) => locale !== reference)) {
    const file = fileOf(locale, page)
    const own = parsedOf(locale, page)

    const refKeys = Object.keys(ref.frontMatter)
    const ownKeys = Object.keys(own.frontMatter)
    const missing = refKeys.filter((key) => !ownKeys.includes(key))
    const extra = ownKeys.filter((key) => !refKeys.includes(key))
    if (missing.length || extra.length) {
      const parts = [
        missing.length && `misses ${missing.join(', ')}`,
        extra.length && `has ${extra.join(', ')} in addition`,
      ].filter(Boolean)
      error(file, 1, `front matter ${parts.join(' and ')} compared to ${refFile}`)
    }
    for (const key of LAYOUT_KEYS) {
      if (key in ref.frontMatter && key in own.frontMatter && ref.frontMatter[key] !== own.frontMatter[key]) {
        error(file, 1, `front matter ${key} is "${own.frontMatter[key]}", ${refFile} has "${ref.frontMatter[key]}"`)
      }
    }

    if (outline(own.sections) !== outline(ref.sections)) {
      const length = Math.max(own.sections.length, ref.sections.length)
      for (let i = 1; i < length; i++) {
        const mine = own.sections[i]
        const theirs = ref.sections[i]
        if (mine?.level === theirs?.level) continue
        const describe = (s) => (s ? `"${'#'.repeat(s.level)} ${s.text}" (line ${s.line})` : 'no further heading')
        error(
          file,
          mine?.line ?? own.sections[own.sections.length - 1].line,
          `heading outline differs from ${refFile}: heading ${i} is ${describe(mine)} here, ${describe(theirs)} there`,
        )
        break
      }
      continue // section counts cannot be paired up across a different outline
    }

    own.sections.forEach((mine, i) => {
      const theirs = ref.sections[i]
      for (const kind of ['links', 'images']) {
        if (mine[kind] !== theirs[kind]) {
          error(
            file,
            mine.line,
            `section "${mine.text}" has ${mine[kind]} ${kind}, "${theirs.text}" in ${refFile} (line ${theirs.line}) has ${theirs[kind]}`,
          )
        }
      }
    })
  }
}

// 3. Every anchor a page links to exists.
function resolvePage(locale, route) {
  const base = route.replace(/\.html$/, '')
  const candidates = base === '' || base.endsWith('/') ? [`${base}README.md`] : [`${base}.md`, `${base}/README.md`]
  for (const page of candidates) {
    if (pagesByLocale[locale]?.has(page)) return { locale, page }
    if (page.startsWith(ENGLISH_FALLBACK) && pagesByLocale[REFERENCE].has(page)) return { locale: REFERENCE, page }
  }
  return null
}

for (const locale of LOCALES) {
  for (const page of pagesByLocale[locale]) {
    const file = fileOf(locale, page)
    for (const { target, line } of parsedOf(locale, page).targets) {
      let destination
      let anchor
      if (target.startsWith('#')) {
        destination = { locale, page }
        anchor = target.slice(1)
      } else {
        const match = target.match(/^\/(de|en|es|fr)\/([^#?]*)(?:\?[^#]*)?(?:#(.*))?$/)
        if (!match) continue
        destination = resolvePage(match[1], match[2])
        anchor = match[3]
        if (!destination) {
          error(file, line, `link to ${target}: no such page under ${DOCS}/${match[1]}/`)
          continue
        }
      }
      if (!anchor) continue
      let id = anchor
      try {
        id = decodeURIComponent(anchor)
      } catch {
        // keep the anchor as written
      }
      if (!parsedOf(destination.locale, destination.page).ids.has(id)) {
        error(file, line, `link to ${target}: ${fileOf(destination.locale, destination.page)} has no heading with id "${id}"`)
      }
    }
  }
}

// Soft: a page changed in some locales only.
const base = process.env.BASE_REF
if (base) {
  const changed = execFileSync('git', ['diff', '--name-only', '--diff-filter=AMR', `${base}...HEAD`, '--', DOCS], {
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean)
  const changedPages = new Map()
  for (const name of changed) {
    const match = name.match(/^docs\/(de|en|es|fr)\/(.+\.md)$/)
    if (!match) continue
    if (!changedPages.has(match[2])) changedPages.set(match[2], new Set())
    changedPages.get(match[2]).add(match[1])
  }
  for (const [page, locales] of changedPages) {
    const unchanged = LOCALES.filter((locale) => pagesByLocale[locale].has(page) && !locales.has(locale))
    for (const locale of unchanged) {
      warning(
        fileOf(locale, page),
        1,
        `${page} changed in ${[...locales].join(', ')} but not here: update this translation if the meaning changed`,
      )
    }
  }
}

console.log(
  `\nChecked ${allPages.length} pages in ${LOCALES.length} locales: ${errors} error(s), ${warnings} warning(s).`,
)
if (errors) {
  console.log('Fix the translations, or the version that diverged, so all locales match again.')
  process.exit(1)
}
