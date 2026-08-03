---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-08-03
category:
  - Releases
tag:
  - Releases
  - Branding
  - Perfil
  - Grupos
  - Administración
cover: /blog/ocelot-social-release-v3-18.png
coverAlt: "Ocelot.social Versión 3.18.0"
title: "Nueva versión – Ocelot.Social v3.18.0"
description: "La versión 3.18.0 trae un sistema de branding completamente nuevo: los operadores de red componen ahora su apariencia directamente en la administración, sin un nuevo despliegue. Además, llegan perfiles renovados con lista de grupos y filtros, así como funciones que se pueden desactivar."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

La versión 3.18.0 trae un sistema de branding completamente nuevo: los operadores de red componen ahora su apariencia directamente en la administración, sin un nuevo despliegue.
Además, llegan perfiles de usuario renovados con lista de grupos y filtros, así como funciones que se pueden desactivar por red.

## Destacado: el nuevo sistema de branding

Hasta ahora, la apariencia de una red estaba integrada de forma fija en su configuración – cada cambio significaba una nueva compilación. A partir de la v3.18.0, el branding es un paquete propio que se resuelve en tiempo de ejecución. 💚

- **El branding como paquete propio** – el esquema, los valores por defecto y su resolución están en un único lugar que comparten el backend y la webapp. Valores como los límites de grupo, los metadatos, los logotipos, los menús o los colores del tema ya no pueden divergir.
- **Paquetes de branding en lugar de configuración fija** – una marca se compila en un archivo y se carga en la red en funcionamiento.
- **Composición en la administración** – un paquete completo sirve de base, mientras que áreas concretas (logotipos, tema, menú, textos …) se pueden sobrescribir de forma independiente o restablecer a los valores por defecto del framework.
- **Traducciones propias por marca** – se pueden sobrescribir archivos de idioma completos o áreas concretas de una funcionalidad.
- **Comprobación del esquema** – si un paquete de branding no encaja con la versión en ejecución, se avisa en lugar de fallar en silencio.
- **La página de mantenimiento y los correos** usan ahora el mismo branding que el resto de la red.

## Perfiles y grupos

- 👥 **Lista de grupos en el perfil de usuario** – solo se muestra lo que permiten los ajustes de privacidad
- 🔍 **Filtros para las listas de seguidores y la lista de grupos** – encuentra rápidamente a quién o qué buscas, incluso en listas largas
- ✨ **Perfil de usuario renovado** – una presentación más ordenada del perfil y sus listas de seguidores
- 💬 **Popover de grupos en el teaser de usuario** – ver la pertenencia a grupos de un vistazo

## Para operadores de red

- 🚫 **Los grupos se pueden desactivar** – las redes sin la función de grupos ahora la ocultan por completo
- 🔗 **Los enlaces a redes sociales se pueden desactivar** – enlazar perfiles externos es opcional
- 🏷️ **Renombrar roles** – los roles se pueden adaptar al lenguaje de vuestra propia comunidad
- ⚠️ **Conflictos de edición** – los cambios simultáneos en roles y políticas se detectan y resuelven limpiamente en lugar de sobrescribirse entre sí
- 🔧 La pestaña de configuración del sistema vuelve a funcionar correctamente

## Para desarrolladores

- 📖 **Documentación de la API** – la interfaz GraphQL está ahora documentada
- 🧪 Mayor cobertura de tests en la webapp y una cadena de CI propia para el paquete de branding

## Errores corregidos

- Los avatares de vídeo se muestran correctamente y su navegación está reparada
- Campos de ubicación y sus menús corregidos, textos de ayuda duplicados eliminados
- Añadidos tiempos de espera en SSR y validación de los identificadores de marca
- Archivo Docker de la webapp y resolución de caché reparados

## Bajo el capó

- Numerosas actualizaciones de dependencias para seguridad y estabilidad, incluida la compatibilidad con Node 26

## Changelog

Versión [3.18.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.18.0).

## Donaciones

Si te gusta *ocelot.social*, apoya el desarrollo y mantenimiento de este software libre y de código abierto con una donación a [busFaktor() e.V.](/es/donate/).

## Apoya *ocelot.social*

- [Contribuir](/es/contribute/)
- [Donar](/es/donate/)
