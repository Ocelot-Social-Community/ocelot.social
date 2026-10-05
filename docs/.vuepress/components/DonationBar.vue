<template>
  <!-- similar to markdown "### X" -->
  <h3 v-if="showTitle" id="current-donation-total" tabindex="-1">
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
    <template v-if="data.extendedUntilDate">
      <br/>
      <strong class="extended-notice">{{ extendedUntilDateStr }}</strong>
    </template>
  </p>
</template>

<script setup>
import { computed } from "vue"
import { usePageLang, useRouteLocale } from "vuepress/client"

import { findCampaign } from "../crowdfunding.js"

const stripSlashes = s => s.replace(/^\/+|\/+$/g, '');

const locale = stripSlashes(useRouteLocale().value) || 'de'
const lang = usePageLang().value || 'de-DE'

const props = defineProps({
  // id of a campaign in crowdfunding.js
  campaign: {
    type: String,
    required: true
  },
  showTitle: {
    type: Boolean,
    default: true
  },
})

const data = computed(() => {
  const c = findCampaign(props.campaign)
  return {
    currentValue: c.raised,
    target: c.target,
    startDate: c.start,
    endDate: c.end,
    asOfDate: c.asOf,
    extendedUntilDate: c.extendedUntil || null,
  }
})

const title = computed(() => {
  switch (locale) {
    case 'de':
      return 'Aktueller Spendenstand — Ziel: ' + data.value.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'en':
      return 'Current donation total — Target: ' + data.value.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'es':
      return 'Saldo actual de donaciones — Objetivo: ' + data.value.target.toLocaleString(lang) + ' €' // &thinsp;€
    case 'fr':
      return 'Montant actuel des dons — Objectif : ' + data.value.target.toLocaleString(lang) + ' €' // &thinsp;€
  }
})
const currentValueStr = computed(() => {
  return data.value.currentValue.toLocaleString(lang) + ' €' // &thinsp;€
})
const barWidthStr = computed(() => Math.min((data.value.currentValue / data.value.target) * 100, 100) + '%')
const isSmall = computed(() => data.value.currentValue / data.value.target < 0.2)
const dateFormat = { year: "numeric", month: "long", day: "numeric" }
const asOfDateStr = computed(() => {
  switch (locale) {
    case 'de':
      return 'Stand ' + new Date(data.value.asOfDate).toLocaleDateString(lang, dateFormat) + ', wird wöchentlich aktualisiert.'
    case 'en':
      return 'As of ' + new Date(data.value.asOfDate).toLocaleDateString(lang, dateFormat) + ', updated weekly.'
    case 'es':
      return 'Situación a ' + new Date(data.value.asOfDate).toLocaleDateString(lang, dateFormat) + ', se actualiza semanalmente.'
    case 'fr':
      return 'Situation au ' + new Date(data.value.asOfDate).toLocaleDateString(lang, dateFormat) + ', mise à jour hebdomadaire.'
  }
})
const extendedUntilDateStr = computed(() => {
  if (!data.value.extendedUntilDate) return ''
  const date = new Date(data.value.extendedUntilDate).toLocaleDateString(lang, dateFormat)
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
      return 'Das Crowdfunding läuft vom ' + new Date(data.value.startDate).toLocaleDateString(lang, dateFormat) + ' bis ' + new Date(data.value.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'en':
      return 'The crowdfunding campaign will run from ' + new Date(data.value.startDate).toLocaleDateString(lang, dateFormat) + ', to ' + new Date(data.value.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'es':
      return 'La campaña de crowdfunding estará activa desde el ' + new Date(data.value.startDate).toLocaleDateString(lang, dateFormat) + ' hasta el ' + new Date(data.value.endDate).toLocaleDateString(lang, dateFormat) + '.'
    case 'fr':
      return 'Le financement participatif se déroulera du ' + new Date(data.value.startDate).toLocaleDateString(lang, dateFormat) + ' au ' + new Date(data.value.endDate).toLocaleDateString(lang, dateFormat) + '.'
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
