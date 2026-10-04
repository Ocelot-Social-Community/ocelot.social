<template>
  <section class="crowdfunding">
    <template v-if="featured">
      <h2 id="current-campaign" tabindex="-1">
        <a class="header-anchor" href="#current-campaign"><span>{{ text.current }}</span></a>
      </h2>
      <article class="card card--featured">
        <RouterLink :to="featured.local.path" class="card__media">
          <img v-if="featured.local.cover" :src="featured.local.cover" :alt="featured.local.title" />
        </RouterLink>
        <div class="card__body">
          <span class="badge" :class="`badge--${featured.status}`">{{ text.status[featured.status] }}</span>
          <RouterLink :to="featured.local.path" class="card__title">{{ featured.local.title }}</RouterLink>
          <p class="card__excerpt">{{ featured.local.description }}</p>
          <DonationBar :campaign="featured.id" />
          <RouterLink :to="featured.local.path" class="card__more">{{ text.toCampaign }} →</RouterLink>
        </div>
      </article>
    </template>
    <template v-else>
      <h2 id="current-campaign" tabindex="-1">
        <a class="header-anchor" href="#current-campaign"><span>{{ text.noCurrent }}</span></a>
      </h2>
      <p>
        {{ text.noCurrentHint }}
        <RouterLink :to="`/${locale}/donate/`">{{ text.donate }}</RouterLink>
      </p>
    </template>

    <template v-if="past.length">
      <h2 id="past-campaigns" tabindex="-1">
        <a class="header-anchor" href="#past-campaigns"><span>{{ text.past }}</span></a>
      </h2>
      <div class="grid">
        <article v-for="c in past" :key="c.id" class="card">
          <RouterLink :to="c.local.path" class="card__media">
            <img v-if="c.local.cover" :src="c.local.cover" :alt="c.local.title" loading="lazy" />
          </RouterLink>
          <div class="card__body">
            <span class="badge" :class="c.funded ? 'badge--funded' : 'badge--ended'">
              {{ c.funded ? text.funded : text.status.ended }}
            </span>
            <RouterLink :to="c.local.path" class="card__title">{{ c.local.title }}</RouterLink>
            <p class="card__meta">
              {{ text.result(formatAmount(c.raised), formatAmount(c.target)) }}<br/>
              {{ formatDate(c.start) }} – {{ formatDate(c.effectiveEnd) }}
            </p>
            <p class="card__links">
              <RouterLink :to="c.local.path" class="card__more">{{ text.toCampaign }} →</RouterLink>
              <RouterLink v-if="c.local.thanksPath" :to="c.local.thanksPath" class="card__more">{{ text.toThanks }} →</RouterLink>
            </p>
          </div>
        </article>
      </div>
    </template>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import { usePageLang, useRouteLocale } from "vuepress/client"

import data from "@temp/crowdfunding.campaigns.json" // written by the crowdfunding plugin in config.js
import { campaignStatus, effectiveEnd, isFunded, toIsoDate } from "../crowdfunding.js"

const TEXT = {
  de: {
    current: 'Aktuelle Kampagne',
    noCurrent: 'Derzeit läuft kein Crowdfunding',
    noCurrentHint: 'Die nächste Kampagne kündigen wir hier an. Bis dahin freuen wir uns über deine',
    donate: 'Spende',
    past: 'Bisherige Kampagnen',
    status: { upcoming: 'Startet bald', running: 'Läuft', ended: 'Beendet' },
    funded: 'Finanziert ✓',
    result: (raised, target) => `${raised} von ${target} gesammelt`,
    toCampaign: 'Zur Kampagne',
    toThanks: 'Zum Dankeschön',
  },
  en: {
    current: 'Current campaign',
    noCurrent: 'No crowdfunding campaign running at the moment',
    noCurrentHint: 'We will announce the next campaign here. Until then, we appreciate your',
    donate: 'donation',
    past: 'Previous campaigns',
    status: { upcoming: 'Starting soon', running: 'Running', ended: 'Ended' },
    funded: 'Funded ✓',
    result: (raised, target) => `${raised} of ${target} raised`,
    toCampaign: 'To the campaign',
    toThanks: 'To the thank you',
  },
  es: {
    current: 'Campaña actual',
    noCurrent: 'En este momento no hay ninguna campaña de crowdfunding',
    noCurrentHint: 'Anunciaremos aquí la próxima campaña. Mientras tanto, agradecemos tu',
    donate: 'donación',
    past: 'Campañas anteriores',
    status: { upcoming: 'Empieza pronto', running: 'En curso', ended: 'Finalizada' },
    funded: 'Financiada ✓',
    result: (raised, target) => `${raised} de ${target} recaudados`,
    toCampaign: 'A la campaña',
    toThanks: 'Al agradecimiento',
  },
  fr: {
    current: 'Campagne actuelle',
    noCurrent: 'Aucun financement participatif en cours',
    noCurrentHint: 'Nous annoncerons la prochaine campagne ici. En attendant, nous apprécions votre',
    donate: 'don',
    past: 'Campagnes précédentes',
    status: { upcoming: 'Bientôt', running: 'En cours', ended: 'Terminée' },
    funded: 'Financée ✓',
    result: (raised, target) => `${raised} sur ${target} collectés`,
    toCampaign: 'Vers la campagne',
    toThanks: 'Vers les remerciements',
  },
}

const locale = useRouteLocale().value.replace(/\//g, '') || 'de'
const lang = usePageLang().value || 'de-DE'
const text = TEXT[locale] || TEXT.de

// SSR renders the status as of build time; the client updates it to today.
const today = ref(data.builtAt)
onMounted(() => {
  today.value = toIsoDate(new Date())
})

const campaigns = computed(() =>
  data.campaigns.map((c) => ({
    ...c,
    local: c.locales[locale] || c.locales.en,
    status: campaignStatus(c, today.value),
    funded: isFunded(c),
    effectiveEnd: effectiveEnd(c),
  })),
)

// Only the latest campaign can be the current one.
const featured = computed(() => {
  const latest = campaigns.value[0]
  return latest && latest.status !== 'ended' ? latest : null
})
const past = computed(() => campaigns.value.filter((c) => c.status === 'ended'))

const formatAmount = (value) => value.toLocaleString(lang) + ' €'
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<style scoped>
.crowdfunding { margin-top: 1rem; }

.grid {
  display: grid;
  gap: 1.8rem 1.2rem;
  grid-template-columns: 1fr;
}
@media (min-width: 720px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider, rgba(0,0,0,.08));
  background: var(--vp-c-bg, #fff);
  box-shadow: var(--vp-shadow-1, 0 1px 2px rgba(0,0,0,.05));
}
.card__media {
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0,0,0,.06), rgba(0,0,0,.02));
}
.card__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.card__body { padding: .9rem 1rem 1rem; display: grid; gap: .5rem; }
.card__title {
  font-weight: 700; line-height: 1.25; text-decoration: none;
  color: var(--vp-c-text-1, inherit);
}
.card--featured .card__title { font-size: 1.4rem; }
.card__title:hover { text-decoration: underline; }
.card__excerpt, .card__meta, .card__links { margin: 0; }
.card__meta { font-size: .9rem; opacity: .85; }
.card__links { display: flex; gap: 1rem; flex-wrap: wrap; }
.card__more { font-weight: 600; text-decoration: none; }
.card__more:hover { text-decoration: underline; }

.badge {
  justify-self: start;
  padding: .1rem .55rem;
  border-radius: 999px;
  font-size: .75rem;
  font-weight: 600;
  background: var(--vp-c-brand-soft, rgba(0,0,0,.06));
  color: var(--vp-c-brand-1, inherit);
}
.badge--ended { background: var(--vp-c-divider, rgba(0,0,0,.08)); color: var(--vp-c-text-2, inherit); }
</style>
