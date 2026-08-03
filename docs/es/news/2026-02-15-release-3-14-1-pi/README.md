---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-02-15
category:
  - Releases
tag:
  - Releases
  - Vue 3
  - Grupos
cover: /blog/ocelot-social-release-v3-14-1-pi.jpg
coverAlt: "Ocelot.social Versión 3.14.1 – Pi"
title: "Ocelot.social Pi (3.14.1) ya está aquí – Fijar publicaciones en grupos"
description: "Con ocelot.social Pi (3.14.1), los propietarios y administradores de grupos pueden fijar publicaciones. Además, correcciones de errores y el inicio de la migración a Vue 3."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

A partir de ahora, cada versión de *ocelot.social* que contenga cambios significativos llevará un nombre de versión.
Comenzamos con un nombre derivado del número de versión actual.

## Nueva función

Con *ocelot.social* Pi (3.14.1), los propietarios y administradores de grupos pueden fijar publicaciones en sus grupos.
Esto permite a los miembros del grupo ver de inmediato las publicaciones importantes, como anuncios y eventos.

Esto fue posible gracias a las donaciones de nuestra [primera campaña de crowdfunding](/es/news/2025-11-05-crowdfunding-feature-pinned-posts-in-groups/).
Una vez más, un gran agradecimiento a nuestros donantes. ¡Vosotros lo hicisteis posible!

## Errores corregidos

- El filtro de categorías vuelve a funcionar correctamente.
- La visualización de los ajustes de notificaciones es correcta de nuevo.
- Se han corregido los enlaces erróneos en los correos de notificación.
- Las páginas de información (aviso legal, política de privacidad, etc.) vuelven a funcionar.

## Bajo el capó

*Ocelot.social* utiliza Vue.js en su versión 2 como framework de frontend, que ya no está actualizado.
La migración a Vue 3 es muy compleja debido a los muchos cambios entre versiones, pero se ha iniciado con *ocelot.social* Pi.

Debido al alcance y la complejidad, se eligió un enfoque modular que permite una migración gradual.
En el primer paso, se migraron y mejoraron todos los botones.

## Resumen del changelog

Resumen generado por IA de las versiones [3.14.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.0) y [3.14.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.1):

### Features

- Group Pins — Las publicaciones se pueden fijar en grupos (#9034)
- Commando de creación de administrador para producción (#9057)
- Script de BD para desactivar notificaciones (#9131)
- Integración de CodeRabbit para revisiones de PR (#9194)

### Migración a Vue 3

- Fase 2 — Setup: Preparación de las bases para la migración (#9161)
- Fase 3 — Integración: Librería UI integrada en la webapp (#9180)
- Migración de botones: Estados de icono, círculo y carga migrados (#9208)
- Vue actualizado a 2.7.16 como requisito previo (#9160)

### UI Package (packages/ui)

- Reglas de ESLint extraídas a eslint-config-it4c (#9198, #9233)
- Clase CSS os-button para compatibilidad de marca (#9211)

### Correcciones de errores

- Backend: Filtro de categorías reparado (#9209, #9123)
- Backend: Publicaciones fijadas visibles incluso para usuarios silenciados (#9200)
- Backend: Ajustes de notificaciones para currentUser (#9130)
- Backend: Codificación de URL en correos (#9127)
- Backend: Permisos para GroupInviteCodes (#9121)
- Backend: Consulta del campo myRole de grupo (#9102)
- Webapp: Cambio de idioma en páginas estáticas (#9202)
- Webapp: Páginas estáticas disponibles sin iniciar sesión (#9201)
- Webapp: Ruta interna para botón personalizado (#9129)
- Webapp: Crash de CTA-Join-Group cuando el grupo no está definido (#9103)
- Webapp: Tests locales de frontend (#9104, #9125)

### Refactoring

- Backend: Parametrización de consulta de reportes + limpieza de resolver (#9156)
- Backend: Linting de GraphQL (#8473)
- Backend: Modelo de membresía de grupo (#9124)
- Backend: Middleware before/after (#9128)
- Backend: Roles de prueba (#9157)

### Workflow/CI

- Tests E2E ejecutados en paralelo (#9205)
- Caché de paquetes (#9206)
- Nuevo scope de PR package/ui (#9196)
- Correcciones del workflow de UI (#9204, #9207)
- Workflow de auto-aprobación eliminado (#9197)
- Versiones de Node.js consolidadas (#9126)

~80 actualizaciones de dependencias (Node, Nginx, AWS SDK, Cypress, etc.) omitidas.

## Donaciones

Si te gusta *ocelot.social*, apoya el desarrollo y mantenimiento de este software libre y de código abierto con una donación a [busFaktor() e.V.](/es/donate/).

## Apoya *ocelot.social*

- [Contribuir](/es/contribute/)
- [Donar](/es/donate/)
