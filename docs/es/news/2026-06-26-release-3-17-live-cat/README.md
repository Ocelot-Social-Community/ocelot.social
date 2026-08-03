---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-06-26
category:
  - Releases
tag:
  - Releases
  - Vídeo
  - Grupos
  - Permisos
cover: /blog/ocelot-social-release-v3-17.png
coverAlt: "Ocelot.social Versión 3.17 – Live Cat"
title: "Ocelot.social 3.17 Live Cat ya está aquí – Videoconferencias en grupos y más control"
description: "Con *ocelot.social* 3.17 Live Cat podéis realizar videoconferencias juntos en grupos – y con el nuevo sistema de roles y políticas tenéis más control que nunca."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Con *ocelot.social* 3.17 Live Cat podéis realizar videoconferencias juntos en grupos.
Además, llega un sistema ampliado de roles, permisos y políticas que le da a vuestra comunidad más control que nunca.

## Destacado: Roles, permisos y políticas

¿Quién puede hacer qué? A partir de v3.17 lo decidís con más precisión que nunca.
Esta versión gira principalmente en torno a un sistema ampliado de roles, permisos y políticas – la base para comunidades que quieren controlar con precisión quién puede usar qué funciones. 💚

- **Roles y permisos como nueva base** – incluidos permisos más granulares
- **Políticas de red dinámicas** – los ajustes se pueden adaptar paso a paso sin un nuevo despliegue
- **Control de políticas directamente en la interfaz** – las funciones solo aparecen donde están permitidas
- **Manejo de errores más limpio** – los accesos bloqueados ahora informan correctamente "no autorizado" en lugar de un error interno del servidor

## Nuevas funciones

- 🎥 Videoconferencias en grupos públicos – videoconferencias conjuntas en grupos públicos
- 🔄 Cambiar el tipo de grupo – los propietarios pueden cambiar el tipo de su grupo posteriormente
- 📍 Selección de ubicación unificada – un componente de ubicación consistente y refactorizado
- ✉️ Branding de correo ampliado – ahora también CSS personalizable para vuestros correos

## Seguridad y privacidad

- 🕵️ Sin más fugas de referrer – los enlaces externos ya no transmiten la URL de origen
- 🔗 Codificación URL correcta para nombres de grupos y usuarios, enlaces del menú de publicaciones y redirecciones
- 🏷️ Slugs generados en el servidor en lugar de construidos manualmente – incl. slugs limpios sin apóstrofos ni comas

## Errores corregidos

- Los miembros pendientes ya no aparecen en el perfil del grupo
- Interfaz de administración de insignias y categorías de configuración de grupos corregidas
- Botón de filtro en el feed de noticias y ventana de chat de grupo reparados
- Comportamiento WebSocket más estable al iniciar sesión (reconexión limpia)
- Corrección del heartbeat, definición duplicada de puerto Docker eliminada
- Test inestable de publicaciones fijadas corregido

## Bajo el capó

- Numerosas actualizaciones de dependencias para seguridad y estabilidad

## Changelog

Versión [3.17.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.17.0).

## Donaciones

Si te gusta *ocelot.social*, apoya el desarrollo y mantenimiento de este software libre y de código abierto con una donación a [busFaktor() e.V.](/es/donate/).

## Apoya *ocelot.social*

- [Contribuir](/es/contribute/)
- [Donar](/es/donate/)
