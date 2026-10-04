<template>
  <p>
    {{ bankAccount.holder }}<br/>
    IBAN{{ text.colon }}{{ bankAccount.iban }}<br/>
    BIC{{ text.colon }}{{ bankAccount.bic }}<br/>
    {{ bankAccount.bank }}, {{ text.country }}
  </p>
  <p>
    {{ text.location }}{{ text.colon }}{{ bankAccount.street }}, {{ bankAccount.zip }} {{ text.city }}, {{ text.country }}
  </p>
</template>

<script setup>
import { computed } from "vue"
import { useRouteLocale } from "vuepress/client"

import { bankAccount } from "../crowdfunding.js"

const TEXT = {
  de: { location: 'Ort', city: 'Augsburg', country: 'Deutschland', colon: ': ' },
  en: { location: 'Location', city: 'Augsburg', country: 'Germany', colon: ': ' },
  es: { location: 'Ubicación', city: 'Augsburgo', country: 'Alemania', colon: ': ' },
  fr: { location: 'Lieu', city: 'Augsbourg', country: 'Allemagne', colon: ' : ' },
}

const routeLocale = useRouteLocale()
const text = computed(() => TEXT[routeLocale.value.replace(/\//g, '')] || TEXT.de)
</script>
