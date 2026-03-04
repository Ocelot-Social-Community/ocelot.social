<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = (navigator.language || 'de').split('-')[0].toLowerCase()

  const localeMap = {
    de: '/de/',
    en: '/en/',
    es: '/es/',
    fr: '/fr/',
  }

  window.location.replace(localeMap[lang] || '/de/')
})
</script>
