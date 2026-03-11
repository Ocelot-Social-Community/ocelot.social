<template>
  <div class="roadmap" :class="{ 'roadmap--animated': animated, 'roadmap--expanded': showAllPast || showAllFuture }">
    <div class="roadmap-legend">
      <span class="roadmap-legend-item">
        <span class="roadmap-legend-dot roadmap-legend-dot--done"></span> {{ t.done }}
      </span>
      <span class="roadmap-legend-item">
        <span class="roadmap-legend-dot roadmap-legend-dot--in-progress"></span> {{ t.inProgress }}
      </span>
      <span class="roadmap-legend-item">
        <span class="roadmap-legend-dot roadmap-legend-dot--planned"></span> {{ t.planned }}
      </span>
    </div>

    <div class="roadmap-timeline">
      <!-- Drei Punkte: es wurde bereits viel umgesetzt -->
      <div v-if="hasHiddenPast" class="roadmap-past roadmap-expandable" @click="expandPast">
        <div class="roadmap-past-dots">
          <span class="roadmap-past-dot"></span>
          <span class="roadmap-past-dot"></span>
          <span class="roadmap-past-dot"></span>
        </div>
        <span class="roadmap-past-label">{{ t.previouslyCompleted }}</span>
      </div>

      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="roadmap-station"
        :class="'roadmap-station--' + item.status"
        :style="{ '--i': index }"
      >
        <!-- Verbindungslinie zum nächsten Punkt -->
        <div v-if="index < items.length - 1 || (index === items.length - 1 && hasMorePlanned)" class="roadmap-connector" :style="index < items.length - 1 ? connectorStyle(index) : { '--conn-color': '#059669' }"></div>

        <!-- Station-Marker -->
        <div class="roadmap-marker" :class="'roadmap-marker--' + item.status">
          <span v-if="item.status === 'done'" class="roadmap-marker-icon">&#10003;</span>
          <svg v-else-if="item.status === 'in-progress'" class="roadmap-marker-svg" viewBox="0 0 512 512" fill="#fff"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c17 6.2 35.4 9.5 54.5 9.5zM80 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
        </div>

        <!-- Inhalt -->
        <div class="roadmap-content">
          <div class="roadmap-content-header">
            <strong class="roadmap-content-title">{{ item.title[locale] }}</strong>
            <span class="roadmap-content-badge" :class="'roadmap-content-badge--' + item.status">
              {{ statusLabel(item.status) }}
            </span>
          </div>
          <p class="roadmap-content-description">{{ item.description[locale] }}</p>
          <div v-if="item.issues && item.issues.length" class="roadmap-content-issues">
            <a
              v-for="issue in item.issues"
              :key="issue"
              :href="'https://github.com/Ocelot-Social-Community/Ocelot-Social/issues/' + issue"
              target="_blank"
              rel="noopener noreferrer"
            >#{{ issue }}</a>
          </div>
        </div>
      </div>

      <!-- Drei Punkte am Ende: weitere geplante Features -->
      <div v-if="hasMorePlanned" class="roadmap-future roadmap-expandable" @click="expandFuture">
        <div class="roadmap-future-dots">
          <span class="roadmap-future-dot"></span>
          <span class="roadmap-future-dot"></span>
          <span class="roadmap-future-dot"></span>
        </div>
        <span class="roadmap-future-label">{{ t.morePlanned }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useRouteLocale } from "vuepress/client"

const stripSlashes = s => s.replace(/^\/+|\/+$/g, '')
const locale = stripSlashes(useRouteLocale().value) || 'de'

const animated = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    animated.value = true
  })
})

const allItems = [
  {
    id: 0,
    title: {
      de: 'Verbesserte Benachrichtigungen',
      en: 'Improved Notifications',
      es: 'Notificaciones mejoradas',
      fr: 'Notifications améliorées',
    },
    description: {
      de: 'Mehr Benachrichtigungstypen und erweiterte Benachrichtigungsfunktionen für eine bessere Nutzererfahrung.',
      en: 'More notification types and enhanced notification features for a better user experience.',
      es: 'Más tipos de notificaciones y funciones mejoradas para una mejor experiencia de usuario.',
      fr: 'Plus de types de notifications et des fonctionnalités améliorées pour une meilleure expérience utilisateur.',
    },
    status: 'done',
    issues: [],
  },
  {
    id: 1,
    title: {
      de: 'Angepinnte Beiträge in Gruppen',
      en: 'Pinned Posts in Groups',
      es: 'Publicaciones fijadas en grupos',
      fr: 'Publications épinglées dans les groupes',
    },
    description: {
      de: 'Wichtige Beiträge können in Gruppen oben angepinnt werden, damit sie sichtbar bleiben.',
      en: 'Important posts can be pinned to the top of groups so they stay visible.',
      es: 'Las publicaciones importantes se pueden fijar en la parte superior de los grupos para que permanezcan visibles.',
      fr: 'Les publications importantes peuvent être épinglées en haut des groupes pour rester visibles.',
    },
    status: 'done',
    issues: [6233],
  },
  {
    id: 2,
    title: {
      de: 'Gruppen-Chat',
      en: 'Group Chat',
      es: 'Chat de grupo',
      fr: 'Chat de groupe',
    },
    description: {
      de: 'Chaträume für Gruppen, damit Mitglieder in Echtzeit miteinander kommunizieren können.',
      en: 'Chat rooms for groups so members can communicate with each other in real time.',
      es: 'Salas de chat para grupos para que los miembros puedan comunicarse en tiempo real.',
      fr: 'Salons de discussion pour les groupes afin que les membres puissent communiquer en temps réel.',
    },
    status: 'in-progress',
    issues: [],
  },
  {
    id: 3,
    title: {
      de: 'Veranstaltungen verbessern',
      en: 'Improve Events',
      es: 'Mejorar eventos',
      fr: 'Améliorer les événements',
    },
    description: {
      de: 'Erweiterte Veranstaltungsfunktionen wie Teilnehmerlisten, Kalenderintegration und Erinnerungen.',
      en: 'Enhanced event features such as attendee lists, calendar integration, and reminders.',
      es: 'Funciones avanzadas de eventos como listas de asistentes, integración de calendario y recordatorios.',
      fr: 'Fonctionnalités avancées pour les événements : listes de participants, intégration de calendrier et rappels.',
    },
    status: 'planned',
    issues: [],
  },
  {
    id: 4,
    title: {
      de: 'SSO / LDAP / SAML',
      en: 'SSO / LDAP / SAML',
      es: 'SSO / LDAP / SAML',
      fr: 'SSO / LDAP / SAML',
    },
    description: {
      de: 'Single Sign-On-Anbindung für Organisationen mit bestehender Benutzerverwaltung.',
      en: 'Single sign-on integration for organizations with existing user management.',
      es: 'Integración de inicio de sesión único para organizaciones con gestión de usuarios existente.',
      fr: 'Intégration de l\'authentification unique pour les organisations disposant d\'une gestion des utilisateurs existante.',
    },
    status: 'planned',
    issues: [3200],
  },
  {
    id: 5,
    title: {
      de: 'Push-Benachrichtigungen',
      en: 'Push Notifications',
      es: 'Notificaciones push',
      fr: 'Notifications push',
    },
    description: {
      de: 'Sofortige Benachrichtigungen auf dem Gerät bei neuen Beiträgen, Kommentaren oder Nachrichten.',
      en: 'Instant notifications on your device for new posts, comments, or messages.',
      es: 'Notificaciones instantáneas en el dispositivo para nuevas publicaciones, comentarios o mensajes.',
      fr: 'Notifications instantanées sur l\'appareil pour les nouvelles publications, commentaires ou messages.',
    },
    status: 'planned',
    issues: [4327],
  },
  {
    id: 6,
    title: {
      de: 'Gruppenverwaltung (Löschung, Moderation)',
      en: 'Group Management (Deletion, Moderation)',
      es: 'Gestión de grupos (eliminación, moderación)',
      fr: 'Gestion des groupes (suppression, modération)',
    },
    description: {
      de: 'Erweiterte Verwaltungsfunktionen für Gruppen, einschließlich Löschung und Moderationswerkzeuge.',
      en: 'Advanced management features for groups, including deletion and moderation tools.',
      es: 'Funciones avanzadas de gestión de grupos, incluyendo eliminación y herramientas de moderación.',
      fr: 'Fonctionnalités avancées de gestion des groupes, y compris la suppression et les outils de modération.',
    },
    status: 'planned',
    issues: [5388, 7702],
  },
  {
    id: 7,
    title: {
      de: 'Beitrags-Sichtbarkeit & Entwürfe',
      en: 'Post Visibility & Drafts',
      es: 'Visibilidad de publicaciones y borradores',
      fr: 'Visibilité des publications et brouillons',
    },
    description: {
      de: 'Beiträge als Entwurf speichern und die Sichtbarkeit einzelner Beiträge steuern.',
      en: 'Save posts as drafts and control the visibility of individual posts.',
      es: 'Guardar publicaciones como borradores y controlar la visibilidad de publicaciones individuales.',
      fr: 'Enregistrer des publications comme brouillons et contrôler la visibilité des publications individuelles.',
    },
    status: 'planned',
    issues: [2198, 4965],
  },
  {
    id: 8,
    title: {
      de: 'Vue 2 → Vue 3 Migration',
      en: 'Vue 2 → Vue 3 Migration',
      es: 'Migración de Vue 2 → Vue 3',
      fr: 'Migration Vue 2 → Vue 3',
    },
    description: {
      de: 'Migration des Frontends auf Vue 3 für bessere Performance und Zukunftssicherheit.',
      en: 'Migration of the frontend to Vue 3 for better performance and future-proofing.',
      es: 'Migración del frontend a Vue 3 para un mejor rendimiento y preparación para el futuro.',
      fr: 'Migration du frontend vers Vue 3 pour de meilleures performances et une pérennité assurée.',
    },
    status: 'planned',
    issues: [6384],
  },
]

const MAX_VISIBLE = 7

const showAllPast = ref(false)
const showAllFuture = ref(false)

const allDone = allItems.filter(i => i.status === 'done')
const allInProgress = allItems.filter(i => i.status === 'in-progress')
const allPlanned = allItems.filter(i => i.status === 'planned')

const hiddenPastCount = computed(() => Math.max(0, allDone.length - 1))
const hasHiddenPast = computed(() => hiddenPastCount.value > 0 && !showAllPast.value)

// Basis-Anzahl Planned ohne Expansion
const basePlannedCount = MAX_VISIBLE - 1 - allInProgress.slice(0, 1).length

const items = computed(() => {
  const done = showAllPast.value ? allDone : allDone.slice(-1)
  const inProgress = allInProgress.slice(0, 1)
  const maxPlanned = showAllFuture.value ? allPlanned.length : basePlannedCount
  return [...done, ...inProgress, ...allPlanned.slice(0, maxPlanned)]
})

const hasMorePlanned = computed(() => {
  if (showAllFuture.value) return false
  return allPlanned.length > basePlannedCount
})

const expandPast = () => { showAllPast.value = true }
const expandFuture = () => { showAllFuture.value = true }

const i18n = {
  de: { done: 'Erledigt', inProgress: 'In Arbeit', planned: 'Geplant', previouslyCompleted: 'Bereits umgesetzt …', morePlanned: '… und weitere geplant' },
  en: { done: 'Done', inProgress: 'In Progress', planned: 'Planned', previouslyCompleted: 'Previously completed …', morePlanned: '… and more planned' },
  es: { done: 'Completado', inProgress: 'En curso', planned: 'Planificado', previouslyCompleted: 'Ya completado …', morePlanned: '… y más planificado' },
  fr: { done: 'Terminé', inProgress: 'En cours', planned: 'Planifié', previouslyCompleted: 'Déjà réalisé …', morePlanned: '… et d\'autres prévus' },
}

const t = i18n[locale] || i18n.de

const statusLabel = (status) => {
  switch (status) {
    case 'done': return t.done
    case 'in-progress': return t.inProgress
    case 'planned': return t.planned
    default: return t.planned
  }
}

const statusColor = {
  'done': '#eab308',
  'in-progress': '#6366f1',
  'planned': '#059669',
}

const connectorStyle = (index) => {
  const list = items.value
  const from = statusColor[list[index].status]
  const to = statusColor[list[index + 1].status]
  if (from === to) return { '--conn-color': from }
  return { '--conn-from': from, '--conn-to': to }
}
</script>

<style scoped>
.roadmap {
  margin: 1.5rem 0;
}

/* === Legende === */
.roadmap-legend {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 28px;
  font-size: 0.9em;
}

.roadmap-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2, #666);
}

.roadmap-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.roadmap-legend-dot--done {
  background: #eab308;
}

.roadmap-legend-dot--in-progress {
  background: #6366f1;
}

.roadmap-legend-dot--planned {
  background: #059669;
}

/* === Timeline === */
.roadmap-timeline {
  position: relative;
  padding-left: 0;
}

/* === Drei Punkte: vorherige Umsetzungen === */
.roadmap-past {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: -12px;
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 20px;
  position: relative;
}

.roadmap-past-dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 24px;
}

.roadmap-past-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #eab308;
  opacity: 0.5;
}

.roadmap-past-dot:nth-child(2) {
  opacity: 0.7;
}

.roadmap-past-dot:nth-child(3) {
  opacity: 0.9;
}

.roadmap-past-label {
  font-size: 0.85em;
  color: var(--vp-c-text);
  opacity: 0.6;
  font-style: italic;
}

/* === Klickbare Dots === */
.roadmap-expandable {
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.25s ease;
}

.roadmap-expandable:hover {
  background-color: rgba(128, 128, 128, 0.08);
}

.roadmap-past.roadmap-expandable:hover {
  background-color: rgba(234, 179, 8, 0.1);
}

.roadmap-future.roadmap-expandable:hover {
  background-color: rgba(5, 150, 105, 0.1);
}

.roadmap-expandable:hover .roadmap-past-label,
.roadmap-expandable:hover .roadmap-future-label {
  opacity: 0.85;
}

.roadmap-expandable:hover .roadmap-past-dot,
.roadmap-expandable:hover .roadmap-future-dot {
  opacity: 1;
}

/* Verbindungslinie von den Punkten zum ersten Eintrag */
.roadmap-past::after {
  content: '';
  position: absolute;
  left: 24px;
  transform: translateX(-50%);
  bottom: -28px;
  height: 48px;
  width: 3px;
  background: #eab308;
  z-index: 1;
}

/* === Drei Punkte am Ende: weitere geplante Features === */
.roadmap-future {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: -12px;
  padding-left: 12px;
  padding-top: 20px;
  padding-bottom: 12px;
  position: relative;
}


.roadmap-future-dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 24px;
}

.roadmap-future-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #059669;
  opacity: 0.9;
}

.roadmap-future-dot:nth-child(2) {
  opacity: 0.7;
}

.roadmap-future-dot:nth-child(3) {
  opacity: 0.5;
}

.roadmap-future-label {
  font-size: 0.85em;
  color: var(--vp-c-text);
  opacity: 0.6;
  font-style: italic;
}

.roadmap-station {
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-template-rows: auto;
  column-gap: 20px;
  min-height: 80px;
  margin-left: -12px;
  padding-left: 12px;
}

/* === Verbindungslinie === */
.roadmap-connector {
  position: absolute;
  left: 24px;
  transform: translateX(-50%);
  top: 28px;
  bottom: -28px;
  width: 3px;
  z-index: 1;
  background: var(--conn-color, linear-gradient(to bottom, var(--conn-from), var(--conn-to)));
}

/* === Marker === */
.roadmap-marker {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  margin-top: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.roadmap-marker--done {
  background: #eab308;
  border: 3px solid #eab308;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.roadmap-marker--in-progress {
  background: #6366f1;
  border: 3px solid #6366f1;
  box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.2);
}

.roadmap-marker-svg {
  width: 10px;
  height: 10px;
}

.roadmap-marker--planned {
  background: var(--vp-c-bg, #fff);
  border: 3px solid #059669;
}

/* === Inhalt === */
.roadmap-content {
  grid-column: 2;
  grid-row: 1;
  padding: 14px 16px 24px 0;
}

.roadmap-content-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}

strong.roadmap-content-title {
  font-size: 1.15em;
  font-weight: 800;
  color: var(--vp-c-text);
}

.roadmap-content-badge {
  font-size: 0.75em;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.roadmap-content-badge--done {
  background: #fef9c3;
  color: #854d0e;
}

.roadmap-content-badge--in-progress {
  background: #e0e7ff;
  color: #4338ca;
}

.roadmap-content-badge--planned {
  background: #d1fae5;
  color: #065f46;
}

.roadmap-content-description {
  margin: 6px 0 0 0;
  font-size: 0.9em;
  color: var(--vp-c-text);
  opacity: 0.75;
  line-height: 1.6;
}

.roadmap-content-issues {
  display: flex;
  gap: 8px;
  margin-top: 6px;
  font-size: 0.82em;
}

.roadmap-content-issues a {
  color: var(--vp-c-accent-bg);
  text-decoration: none;
  font-weight: 500;
}

.roadmap-content-issues a:hover {
  text-decoration: underline;
}

/* === Hover: Hintergrund über gesamte Zeile + Marker-Puls === */
.roadmap-station {
  cursor: default;
  border-radius: 10px;
  transition: background-color 0.25s ease;
}

.roadmap-station:hover .roadmap-marker {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: scale(1.25);
}

.roadmap-station--done:hover {
  background-color: rgba(234, 179, 8, 0.1);
}

.roadmap-station--done:hover .roadmap-marker {
  box-shadow: 0 0 12px 4px rgba(234, 179, 8, 0.35);
}

.roadmap-station--in-progress:hover {
  background-color: rgba(99, 102, 241, 0.1);
}

.roadmap-station--in-progress:hover .roadmap-marker {
  box-shadow: 0 0 12px 4px rgba(99, 102, 241, 0.35);
}

.roadmap-station--planned:hover {
  background-color: rgba(5, 150, 105, 0.1);
}

.roadmap-station--planned:hover .roadmap-marker {
  box-shadow: 0 0 12px 4px rgba(5, 150, 105, 0.35);
}

/* ==========================================
   Animation: Punkte poppen auf, Linie zieht
   ========================================== */

/* Vor der Animation: alles unsichtbar */
.roadmap-past {
  opacity: 0;
}

.roadmap--animated .roadmap-past {
  animation: contentFadeIn 0.4s ease forwards;
  animation-delay: 0.1s;
}

.roadmap-future {
  opacity: 0;
}

.roadmap--animated .roadmap-future {
  animation: contentFadeIn 0.3s ease forwards;
  animation-delay: 0.3s;
}

.roadmap-station .roadmap-marker,
.roadmap-station .roadmap-content {
  opacity: 0;
  transform: scale(0.5);
}

.roadmap-station .roadmap-connector {
  transform: translateX(-50%) scaleY(0);
  transform-origin: top center;
}

/* Nach mounted: Animation starten */
/* Timing pro Station: Marker poppt auf, Linie zieht, nächster Marker poppt */
/* Station i: marker bei 0.3 + i*0.5s, connector bei 0.3 + i*0.5 + 0.15s */

.roadmap--animated .roadmap-station .roadmap-marker {
  animation: markerPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             markerGlow 0.5s ease calc(0.3s + var(--i) * 0.5s) forwards;
  animation-delay: calc(0.3s + var(--i) * 0.5s);
}

/* Content fliegt mit dem Marker ein */
.roadmap--animated .roadmap-station .roadmap-content {
  animation: contentFadeIn 0.4s ease forwards;
  animation-delay: calc(0.3s + var(--i) * 0.5s);
}

/* Linie zieht sich nach unten */
.roadmap--animated .roadmap-station .roadmap-connector {
  animation: lineGrow 0.4s ease forwards;
  animation-delay: calc(0.45s + var(--i) * 0.5s);
}

@keyframes markerPop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  60% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes markerGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 16px 6px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: none;
  }
}

@keyframes contentFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes lineGrow {
  0% {
    transform: translateX(-50%) scaleY(0);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-50%) scaleY(1);
    opacity: 1;
  }
}

/* Nach Einblend-Animation: in-progress pulsiert dauerhaft */
.roadmap--animated .roadmap-station--in-progress .roadmap-marker {
  animation:
    markerPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
    markerGlow 0.5s ease forwards,
    inProgressPulse 2s ease-in-out 1s infinite;
  animation-delay:
    calc(0.3s + var(--i) * 0.5s),
    calc(0.3s + var(--i) * 0.5s),
    calc(0.8s + var(--i) * 0.5s);
}

@keyframes inProgressPulse {
  0%, 100% {
    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.2);
  }
  50% {
    box-shadow: 0 0 0 9px rgba(99, 102, 241, 0.35);
  }
}

/* === Responsive === */
@media (max-width: 600px) {
  .roadmap-station {
    column-gap: 14px;
  }

  .roadmap-content {
    padding: 8px 0 20px 0;
  }

  strong.roadmap-content-title {
    font-size: 1.05em;
  }
}

/* Reduced motion: keine Animation */
@media (prefers-reduced-motion: reduce) {
  .roadmap-station .roadmap-marker,
  .roadmap-station .roadmap-content {
    opacity: 1;
    transform: none;
  }

  .roadmap-station .roadmap-connector {
    transform: translateX(-50%) scaleY(1);
  }

  .roadmap--animated .roadmap-station .roadmap-marker,
  .roadmap--animated .roadmap-station .roadmap-content,
  .roadmap--animated .roadmap-station .roadmap-connector {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .roadmap--animated .roadmap-station .roadmap-connector {
    transform: translateX(-50%);
  }
}

/* === Expanded: Animation ohne lange Verzögerung === */
.roadmap--expanded.roadmap--animated .roadmap-station .roadmap-marker {
  animation: markerPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             markerGlow 0.6s ease forwards;
  animation-delay: calc(var(--i) * 0.08s), calc(var(--i) * 0.08s);
}

.roadmap--expanded.roadmap--animated .roadmap-station .roadmap-content {
  animation: contentFadeIn 0.5s ease forwards;
  animation-delay: calc(var(--i) * 0.08s);
}

.roadmap--expanded.roadmap--animated .roadmap-station .roadmap-connector {
  animation: lineGrow 0.5s ease forwards;
  animation-delay: calc(var(--i) * 0.08s + 0.1s);
}

.roadmap--expanded.roadmap--animated .roadmap-station--in-progress .roadmap-marker {
  animation: markerPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             markerGlow 0.6s ease forwards,
             inProgressPulse 2s ease-in-out 0.6s infinite;
  animation-delay: calc(var(--i) * 0.08s), calc(var(--i) * 0.08s), calc(var(--i) * 0.08s + 0.5s);
}
</style>
