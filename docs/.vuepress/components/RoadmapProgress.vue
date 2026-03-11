<template>
  <div class="roadmap-container">
    <h3 id="roadmap-progress" tabindex="-1">
      <a class="header-anchor" href="#roadmap-progress">
        <span>{{ progressTitle }}</span>
      </a>
    </h3>
    <div class="roadmap-bar">
      <div class="roadmap-bar-value" :style="{ width: (completedCount / totalCount) * 100 + '%' }">
        <span class="roadmap-bar-text">{{ completedCount }} / {{ totalCount }}</span>
      </div>
    </div>
    <div class="roadmap-items">
      <div v-for="item in items" :key="item.id" class="roadmap-item" :class="'roadmap-item--' + item.status">
        <span class="roadmap-item-icon">{{ statusIcon(item.status) }}</span>
        <div class="roadmap-item-content">
          <div class="roadmap-item-header">
            <strong>{{ item.title[locale] }}</strong>
            <span class="roadmap-item-status">{{ statusLabel(item.status) }}</span>
            <div v-if="item.issues && item.issues.length" class="roadmap-item-issues">
              <a
                v-for="issue in item.issues"
                :key="issue"
                :href="'https://github.com/Ocelot-Social-Community/Ocelot-Social/issues/' + issue"
                target="_blank"
                rel="noopener noreferrer"
              >#{{ issue }}</a>
            </div>
          </div>
          <p class="roadmap-item-description">{{ item.description[locale] }}</p>
        </div>
      </div>
    </div>
    <p class="roadmap-legend">
      {{ legendDone }} · {{ legendInProgress }} · {{ legendPlanned }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouteLocale } from "vuepress/client"

const stripSlashes = s => s.replace(/^\/+|\/+$/g, '')
const locale = stripSlashes(useRouteLocale().value) || 'de'

const items = [
  {
    id: 1,
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
    id: 2,
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
]

const totalCount = items.length
const completedCount = computed(() => items.filter(i => i.status === 'done').length)

const i18n = {
  de: {
    progressTitle: 'Fortschritt',
    done: 'Erledigt',
    inProgress: 'In Arbeit',
    planned: 'Geplant',
    legendDone: '✅ Erledigt',
    legendInProgress: '🔄 In Arbeit',
    legendPlanned: '📋 Geplant',
  },
  en: {
    progressTitle: 'Progress',
    done: 'Done',
    inProgress: 'In Progress',
    planned: 'Planned',
    legendDone: '✅ Done',
    legendInProgress: '🔄 In Progress',
    legendPlanned: '📋 Planned',
  },
  es: {
    progressTitle: 'Progreso',
    done: 'Completado',
    inProgress: 'En curso',
    planned: 'Planificado',
    legendDone: '✅ Completado',
    legendInProgress: '🔄 En curso',
    legendPlanned: '📋 Planificado',
  },
  fr: {
    progressTitle: 'Progression',
    done: 'Terminé',
    inProgress: 'En cours',
    planned: 'Planifié',
    legendDone: '✅ Terminé',
    legendInProgress: '🔄 En cours',
    legendPlanned: '📋 Planifié',
  },
}

const t = i18n[locale] || i18n.de

const progressTitle = t.progressTitle

const statusIcon = (status) => {
  switch (status) {
    case 'done': return '✅'
    case 'in-progress': return '🔄'
    case 'planned': return '📋'
    default: return '📋'
  }
}

const statusLabel = (status) => {
  switch (status) {
    case 'done': return t.done
    case 'in-progress': return t.inProgress
    case 'planned': return t.planned
    default: return t.planned
  }
}

const legendDone = t.legendDone
const legendInProgress = t.legendInProgress
const legendPlanned = t.legendPlanned
</script>

<style scoped>
.roadmap-container {
  margin: 1rem 0;
}

.roadmap-bar {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--vp-c-accent-bg);
  border-radius: 10px;
  margin: 20px 0;
  background: var(--vp-c-bg-alt, #f5f5f5);
}

.roadmap-bar-value {
  border-radius: 10px 0 0 10px;
  color: #000;
  background-color: var(--vp-c-accent-bg);
  font-size: 1.5em;
  text-align: right;
  padding: 4px 10px;
  min-width: 60px;
}

.roadmap-bar-text {
  margin-right: 10px;
}

.roadmap-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
}

.roadmap-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border, #e2e2e3);
  background: var(--vp-c-bg, #fff);
  transition: box-shadow 0.2s;
}

.roadmap-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.roadmap-item--done {
  border-left: 4px solid #10b981;
}

.roadmap-item--in-progress {
  border-left: 4px solid #f59e0b;
}

.roadmap-item--planned {
  border-left: 4px solid #9ca3af;
}

.roadmap-item-icon {
  font-size: 1.3em;
  flex-shrink: 0;
  margin-top: 2px;
}

.roadmap-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.roadmap-item-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
}

.roadmap-item-description {
  margin: 4px 0 0 0;
  font-size: 0.9em;
  color: var(--vp-c-text-2, #666);
  line-height: 1.5;
}

.roadmap-item-status {
  font-size: 0.85em;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--vp-c-bg-alt, #f5f5f5);
  color: var(--vp-c-text-2, #666);
}

.roadmap-item-issues {
  display: flex;
  gap: 6px;
  font-size: 0.85em;
}

.roadmap-item-issues a {
  color: var(--vp-c-accent-bg);
  text-decoration: none;
}

.roadmap-item-issues a:hover {
  text-decoration: underline;
}

.roadmap-legend {
  font-size: 0.9em;
  color: var(--vp-c-text-2, #666);
  margin-top: 16px;
}

@media (max-width: 600px) {
  .roadmap-item {
    padding: 10px 12px;
  }

  .roadmap-bar-value {
    font-size: 1.1em;
  }
}
</style>
