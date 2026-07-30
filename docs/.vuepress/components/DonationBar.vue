<template>
  <!-- similar to markdown "### X" -->
  <h3 id="current-donation-total" tabindex="-1">
    <a class="header-anchor" href="#current-donation-total">
      <span>{{ title }}</span>
    </a>
  </h3>
  <div class="donation-bar-wrapper">
    <div class="donation-bar-fill" :style="{ width: barWidthStr }">
      <span v-if="!isSmall" class="donation-bar-label">{{ currentValueStr }}</span>
    </div>
    <span v-if="isSmall" class="donation-bar-label donation-bar-label--outside">{{ currentValueStr }}</span>
  </div>
  <p>
    {{ asOfDateStr }}
    <br/>
    {{ timeFrameStr }}
    <template v-if="props.extendedUntilDate">
      <br/>
      <strong class="extended-notice">{{ extendedUntilDateStr }}</strong>
    </template>
  </p>
</template>

<script setup>
import { computed } from "vue"
import { usePageLang, useRouteLocale } from "vuepress/client"

const stripSlashes = s => s.replace(/^\/+|\/+$/g, '');

const locale = stripSlashes(useRouteLocale().value) || 'de'
const lang = usePageLang().value || 'de-DE'

const throwError = (message) => {
  console.error(message)
  throw new Error(message)
}

const props = defineProps({
  currentValue: {
    type: Number,
    required: true
  },
  target: {
    type: Number,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  asOfDate: {
    type: String,
    required: true
  },
  extendedUntilDate: {
    type: String,
    default: null
  },
})

if (!isFinite(props.currentValue)) {
  throwError(`[DonationBar] Prop "currentValue" must be a finite number, received: ${props.currentValue}`)
}
if (props.currentValue < 0) {
  throwError(`[DonationBar] Prop "currentValue" must be >= 0, received: ${props.currentValue}`)
}

if (!isFinite(props.target)) {
  throwError(`[DonationBar] Prop "target" must be a finite number, received: ${props.target}`)
}
if (props.target <= 0) {
  throwError(`[DonationBar] Prop "target" must be > 0, received: ${props.target}`)
}

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/

const validateDate = (value, propName) => {
  if (!ISO_DATE_REGEX.test(value)) {
    throwError(`[DonationBar] Prop "${propName}" must be in ISO 8601 format (YYYY-MM-DD), received: ${value}`)
  }
  if (isNaN(new Date(value).getTime())) {
    throwError(`[DonationBar] Prop "${propName}" has invalid date value: ${value}`)
  }
}

validateDate(props.startDate, 'startDate')
validateDate(props.endDate, 'endDate')
validateDate(props.asOfDate, 'asOfDate')
if (props.extendedUntilDate) validateDate(props.extendedUntilDate, 'extendedUntilDate')

const title = computed(() => {
  switch (locale) {
    case 'de':
      return 'Aktueller Spendenstand — Ziel: ' + props.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'en':
      return 'Current donation total — Target: ' + props.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'es':
      return 'Saldo actual de donaciones — Objetivo: ' + props.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'fr':
      return 'Montant actuel des dons — Objectif : ' + props.target.toLocaleString(lang) + ' €' // &thinsp;€
  }
})
const currentValueStr = computed(() => {
  return props.currentValue.toLocaleString(lang) + ' €' // &thinsp;€
})
const barWidthStr = computed(() => Math.min((props.currentValue / props.target) * 100, 100) + '%')
const isSmall = computed(() => props.currentValue / props.target < 0.2)
const dateFormat = { year: "numeric", month: "long", day: "numeric" }
const asOfDateStr = computed(() => {
  switch (locale) {
    case 'de':
      return 'Stand ' + new Date(props.asOfDate).toLocaleDateString(lang, dateFormat) + ', wird wöchentlich aktualisiert.'
    case 'en':
      return 'As of ' + new Date(props.asOfDate).toLocaleDateString(lang, dateFormat) + ', updated weekly.'
    case 'es':
      return 'Situación a ' + new Date(props.asOfDate).toLocaleDateString(lang, dateFormat) + ', se actualiza semanalmente.'
    case 'fr':
      return 'Situation au ' + new Date(props.asOfDate).toLocaleDateString(lang, dateFormat) + ', mise à jour hebdomadaire.'
  }
})
const extendedUntilDateStr = computed(() => {
  if (!props.extendedUntilDate) return ''
  const date = new Date(props.extendedUntilDate).toLocaleDateString(lang, dateFormat)
  switch (locale) {
    case 'de': return '⚠️ Verlängert bis ' + date + '.'
    case 'en': return '⚠️ Extended until ' + date + '.'
    case 'es': return '⚠️ Extendido hasta el ' + date + '.'
    case 'fr': return '⚠️ Prolongé jusqu\'au ' + date + '.'
  }
})
const timeFrameStr = computed(() => {
  switch (locale) {
    case 'de':
      return 'Das Crowdfunding läuft vom ' + new Date(props.startDate).toLocaleDateString(lang, dateFormat) + ' bis ' + new Date(props.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'en':
      return 'The crowdfunding campaign will run from ' + new Date(props.startDate).toLocaleDateString(lang, dateFormat) + ', to ' + new Date(props.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'es':
      return 'La campaña de crowdfunding estará activa desde el ' + new Date(props.startDate).toLocaleDateString(lang, dateFormat) + ' hasta el ' + new Date(props.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'fr':
      return 'Le financement participatif se déroulera du ' + new Date(props.startDate).toLocaleDateString(lang, dateFormat) + ' au ' + new Date(props.endDate).toLocaleDateString(lang, dateFormat) + '.'
  }
})
</script>

<style scoped>
.donation-bar-wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--vp-c-accent-bg);
  border-radius: 10px;
  margin: 20px 0;
  min-height: 2.5em;
}

.donation-bar-fill {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  background-color: var(--vp-c-accent-bg);
}

.donation-bar-label {
  font-size: 2em;
  color: #000;
  white-space: nowrap;
  padding: 0 10px;
}

.donation-bar-label--outside {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
}

@media (max-width: 830px) {
  .donation-bar-wrapper {
    min-height: 2em;
  }
  .donation-bar-label {
    font-size: 1.5em;
  }
}

@media (max-width: 600px) {
  .donation-bar-wrapper {
    min-height: 1.5em;
  }
  .donation-bar-label {
    font-size: 1em;
  }
}
</style>
