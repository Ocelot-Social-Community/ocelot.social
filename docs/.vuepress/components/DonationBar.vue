<template>
  <!-- similar to markdown "### X" -->
  <h3 id="current-donation-total" tabindex="-1">
    <a class="header-anchor" href="#current-donation-total">
      <span>{{ title }}</span>
    </a>
  </h3>
  <div class="donation-bar">
    <div class="donation-bar-value" :style="{ width: (currentValue / target) * 100 + '%' }">
      {{ currentValueStr }}
    </div>
  </div>
  <p>
    {{ asOfDateStr }}
    <br/>
    {{ timeFrameStr }}
  </p>
</template>

<script setup>
import { computed } from "vue"
import { usePageLang, useRouteLocale } from "vuepress/client"

const stripSlashes = s => s.replace(/^\/+|\/+$/g, '');

const locale = stripSlashes(useRouteLocale().value) || 'de'
const lang = usePageLang().value || 'de-DE'

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
})

if (typeof props.currentValue !== 'number') {
  const error = `[DonationBar] Prop "currentValue" must be a number, received: ${typeof props.currentValue} (${props.currentValue})`
  console.error(error)
  throw new Error(error)
}
if (isNaN(props.currentValue)) {
  const error = `[DonationBar] Prop "currentValue" must be a valid number, received: NaN`
  console.error(error)
  throw new Error(error)
}
if (!isFinite(props.currentValue)) {
  const error = `[DonationBar] Prop "currentValue" must be a finite number, received: ${props.currentValue}`
  console.error(error)
  throw new Error(error)
}
if (props.currentValue < 0) {
  const error = `[DonationBar] Prop "currentValue" must be >= 0, received: ${props.currentValue}`
  console.error(error)
  throw new Error(error)
}

if (typeof props.target !== 'number') {
  const error = `[DonationBar] Prop "target" must be a number, received: ${typeof props.target} (${props.target})`
  console.error(error)
  throw new Error(error)
}
if (isNaN(props.target)) {
  const error = `[DonationBar] Prop "target" must be a valid number, received: NaN`
  console.error(error)
  throw new Error(error)
}
if (!isFinite(props.target)) {
  const error = `[DonationBar] Prop "target" must be a finite number, received: ${props.target}`
  console.error(error)
  throw new Error(error)
}
if (props.target <= 0) {
  const error = `[DonationBar] Prop "target" must be > 0, received: ${props.target}`
  console.error(error)
  throw new Error(error)
}

if (typeof props.startDate !== 'string') {
  const error = `[DonationBar] Prop "startDate" must be a string, received: ${typeof props.startDate}`
  console.error(error)
  throw new Error(error)
}
const startDateRegex = /^\d{4}-\d{2}-\d{2}$/
if (!startDateRegex.test(props.startDate)) {
  const error = `[DonationBar] Prop "startDate" must be in ISO 8601 format (YYYY-MM-DD), received: ${props.startDate}`
  console.error(error)
  throw new Error(error)
}
if (isNaN(new Date(props.startDate).getTime())) {
  const error = `[DonationBar] Prop "startDate" has invalid date value: ${props.startDate}`
  console.error(error)
  throw new Error(error)
}

if (typeof props.endDate !== 'string') {
  const error = `[DonationBar] Prop "endDate" must be a string, received: ${typeof props.endDate}`
  console.error(error)
  throw new Error(error)
}
const endDateRegex = /^\d{4}-\d{2}-\d{2}$/
if (!endDateRegex.test(props.endDate)) {
  const error = `[DonationBar] Prop "endDate" must be in ISO 8601 format (YYYY-MM-DD), received: ${props.endDate}`
  console.error(error)
  throw new Error(error)
}
if (isNaN(new Date(props.endDate).getTime())) {
  const error = `[DonationBar] Prop "endDate" has invalid date value: ${props.endDate}`
  console.error(error)
  throw new Error(error)
}

if (typeof props.asOfDate !== 'string') {
  const error = `[DonationBar] Prop "asOfDate" must be a string, received: ${typeof props.asOfDate}`
  console.error(error)
  throw new Error(error)
}
const asOfDateRegex = /^\d{4}-\d{2}-\d{2}$/
if (!asOfDateRegex.test(props.asOfDate)) {
  const error = `[DonationBar] Prop "asOfDate" must be in ISO 8601 format (YYYY-MM-DD), received: ${props.asOfDate}`
  console.error(error)
  throw new Error(error)
}
if (isNaN(new Date(props.asOfDate).getTime())) {
  const error = `[DonationBar] Prop "asOfDate" has invalid date value: ${props.asOfDate}`
  console.error(error)
  throw new Error(error)
}

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
.donation-bar {
  width: 100%;
  border: 1px solid var(--notice-c-accent-bg);
  border-radius: 10px;
  margin: 20px 0 20px 0;
}

.donation-bar-value {
  border-radius: 10px 0 0 10px;
  color: #000;
  background-color: var(--notice-c-accent-bg);
  font-size: 2em;
  text-align: right;
  padding-right: 10px;
}

@media (max-width: 830px) {
  .donation-bar-value {
    font-size: 1.5em;
    padding-right: 6px;
  }
}

@media (max-width: 600px) {
  .donation-bar-value {
    font-size: 1em;
    padding-right: 4px;
  }
}
</style>
