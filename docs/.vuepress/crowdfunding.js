// Single source of truth for crowdfunding campaigns and donation details.
//
// Titles, descriptions and covers are taken from the announcement posts
// (`post`, `thanksPost`) at build time — do not duplicate them here.
//
// Weekly maintenance: update `raised` and `asOf` of the running campaign.
// Extension: set `extendedUntil`.
// New campaign: write the announcement post (all locales) and prepend an entry.

export const bankAccount = {
  holder: 'busFaktor() e.V.',
  iban: 'DE81 5003 1000 1084 5340 01',
  bic: 'TRODDEF1',
  bank: 'Triodos Bank N.V.',
  street: 'Haferstr. 5c',
  zip: '86179',
}

// Newest first. Dates in ISO 8601 (YYYY-MM-DD), amounts in €.
export const campaigns = [
  {
    id: 'public-content',
    post: '2026-08-08-crowdfunding-public-content',
    target: 5500,
    raised: 1770,
    start: '2026-08-08',
    end: '2026-09-05',
    extendedUntil: '2026-10-18',
    asOf: '2026-10-06',
  },
  {
    id: 'chat-for-groups',
    post: '2026-03-03-crowdfunding-feature-chat-for-groups',
    target: 2500,
    raised: 2500,
    start: '2026-03-13',
    end: '2026-04-12',
    extendedUntil: '2026-04-26',
    asOf: '2026-04-27',
  },
  {
    id: 'pinned-posts-in-groups',
    post: '2025-11-05-crowdfunding-feature-pinned-posts-in-groups',
    thanksPost: '2026-01-20-crowdfunding-feature-pinned-posts-in-groups-thanks',
    target: 1200,
    raised: 1330,
    start: '2025-11-05',
    end: '2026-01-02',
    asOf: '2026-01-02',
  },
]

// The campaign featured on the landing page, in the site notice and as
// `/crowdfunding/current.png`: the most recent one.
export const latestCampaign = campaigns[0]

export const findCampaign = (id) => {
  const campaign = campaigns.find((c) => c.id === id)
  if (!campaign) throw new Error(`[crowdfunding] Unknown campaign "${id}"`)
  return campaign
}

export const effectiveEnd = (campaign) => campaign.extendedUntil || campaign.end

// Dates are compared as ISO strings; `today` is a YYYY-MM-DD string.
export const campaignStatus = (campaign, today) => {
  if (today < campaign.start) return 'upcoming'
  if (today <= effectiveEnd(campaign)) return 'running'
  return 'ended'
}

export const isFunded = (campaign) => campaign.raised >= campaign.target

export const toIsoDate = (date) => date.toISOString().slice(0, 10)

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/

// Fails the build on inconsistent data instead of rendering nonsense.
export const validateCampaigns = () => {
  const ids = new Set()
  for (const c of campaigns) {
    const fail = (message) => {
      throw new Error(`[crowdfunding] Campaign "${c.id}": ${message}`)
    }
    if (ids.has(c.id)) fail('duplicate id')
    ids.add(c.id)
    if (!c.post) fail('"post" is required')
    if (!(isFinite(c.target) && c.target > 0)) fail('"target" must be > 0')
    if (!(isFinite(c.raised) && c.raised >= 0)) fail('"raised" must be >= 0')
    for (const key of ['start', 'end', 'asOf', 'extendedUntil']) {
      if (c[key] === undefined && key === 'extendedUntil') continue
      if (!ISO_DATE_REGEX.test(c[key]) || isNaN(Date.parse(c[key]))) {
        fail(`"${key}" must be a valid YYYY-MM-DD date, received: ${c[key]}`)
      }
    }
    if (c.end < c.start) fail('"end" is before "start"')
    if (c.extendedUntil && c.extendedUntil <= c.end) fail('"extendedUntil" must be after "end"')
  }
  for (let i = 1; i < campaigns.length; i++) {
    if (campaigns[i - 1].start < campaigns[i].start) {
      throw new Error('[crowdfunding] Campaigns must be ordered newest first')
    }
  }
}
