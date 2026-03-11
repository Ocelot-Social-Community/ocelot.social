---
home: false
article: false
sidebar: false
lang: es-ES
title: Roadmap
description: La hoja de ruta de ocelot.social muestra las funcionalidades más importantes planificadas y el estado actual del desarrollo.
---

Aquí puedes ver las funcionalidades más importantes planificadas y el progreso actual del desarrollo de *ocelot.social*.

<!-- markdownlint-disable MD033 -->
<RoadmapProgress
  label-done="Completado"
  label-in-progress="En curso"
  label-planned="Planificado"
  label-previously-completed="Ya completado …"
  label-more-planned="… y más planificado"
  :items="[
    { id: 0, title: 'Notificaciones mejoradas', description: 'Más tipos de notificaciones y funciones mejoradas para una mejor experiencia de usuario.', status: 'done', issues: [] },
    { id: 1, title: 'Publicaciones fijadas en grupos', description: 'Las publicaciones importantes se pueden fijar en la parte superior de los grupos para que permanezcan visibles.', status: 'done', issues: [6233] },
    { id: 2, title: 'Chat de grupo', description: 'Salas de chat para grupos para que los miembros puedan comunicarse en tiempo real.', status: 'in-progress', issues: [] },
    { id: 3, title: 'Mejorar eventos', description: 'Funciones avanzadas de eventos como listas de asistentes, integración de calendario y recordatorios.', status: 'planned', issues: [] },
    { id: 4, title: 'SSO / LDAP / SAML', description: 'Integración de inicio de sesión único para organizaciones con gestión de usuarios existente.', status: 'planned', issues: [3200] },
    { id: 5, title: 'Notificaciones push', description: 'Notificaciones instantáneas en el dispositivo para nuevas publicaciones, comentarios o mensajes.', status: 'planned', issues: [4327] },
    { id: 6, title: 'Gestión de grupos (eliminación, moderación)', description: 'Funciones avanzadas de gestión de grupos, incluyendo eliminación y herramientas de moderación.', status: 'planned', issues: [5388, 7702] },
    { id: 7, title: 'Visibilidad de publicaciones y borradores', description: 'Guardar publicaciones como borradores y controlar la visibilidad de publicaciones individuales.', status: 'planned', issues: [2198, 4965] },
    { id: 8, title: 'Migración de Vue 2 → Vue 3', description: 'Migración del frontend a Vue 3 para un mejor rendimiento y preparación para el futuro.', status: 'planned', issues: [6384] },
  ]"
/>
<!-- markdownlint-enable MD033 -->

¿Quieres apoyar una funcionalidad o contribuir? [¡Participa!](/es/contribute/)
