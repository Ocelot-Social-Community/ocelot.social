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
description: "La versión 3.18.0 trae mejoras y novedades para usuarios y operadores de redes ocelot.social. Los usuarios obtienen una lista de sus grupos en su página de perfil y mejores indicaciones para crear publicaciones. Los operadores pueden ahora configurar funciones y partes del aspecto de su red directamente."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

La versión 3.18.0 trae mejoras y novedades para usuarios y operadores de redes ocelot.social. Los usuarios obtienen una lista de sus grupos en su página de perfil y mejores indicaciones para crear publicaciones. Los operadores pueden ahora configurar funciones y partes del aspecto de su red directamente.

Aquí encontrarás más información sobre las novedades, con un [punto destacado](#destacado-introducción-del-nuevo-sistema-de-branding) para los operadores de red.

## Lista de grupos en el perfil de usuario

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-list--en.png" alt="Lista de grupos en el perfil de usuario" />
  <figcaption class="blog-post-image-capture">
    En la parte inferior izquierda de la página de perfil de usuario: la nueva lista de grupos.
  </figcaption>
</figure>

En la página de perfil del usuario ahora es visible una lista de sus grupos (puede desactivarse).
Además, se ha optimizado el diseño y la funcionalidad de estas listas, también en los perfiles de grupo.

## Vista previa del perfil

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-overlay--en.png" alt="Vista previa del perfil de grupo" />
  <figcaption class="blog-post-image-capture">
    Vista previa de un perfil de grupo.
  </figcaption>
</figure>

Al pasar el cursor sobre un nombre de usuario o de grupo aparece ahora una vista previa renovada del perfil, también para los grupos.

## Destacado: introducción del nuevo sistema de branding

Hasta ahora, los operadores no podían personalizar por sí mismos el aspecto de una red.
Para cualquier cambio dependían de un administrador del servidor.
Con la nueva versión se ha puesto la primera piedra fundamental para poder modificar el diseño y otros ajustes en vivo por cuenta propia. 💚

<figure class="blog-post-image">
  <img src="/blog/release-3.18-settings-branding--en.png" alt="Ajustes de branding" />
  <figcaption class="blog-post-image-capture">
    En los ajustes se pueden seleccionar los brandings disponibles y en el futuro también modificarlos directamente.
  </figcaption>
</figure>

Descripción detallada para los interesados técnicos:

- *El branding como paquete propio* – el esquema, los valores por defecto y su resolución están en un único lugar que comparten el backend y la webapp. Valores como los límites de grupo, los metadatos, los logotipos, los menús o los colores del tema ya no pueden divergir.
- *Paquetes de branding en lugar de configuración fija* – una marca se compila en un archivo y se carga en la red en funcionamiento.
- *Composición en la administración* – un paquete completo sirve de base, mientras que áreas concretas (logotipos, tema, menú, textos …) se pueden sobrescribir de forma independiente o restablecer a los valores por defecto del framework.
- *Traducciones propias por marca* – se pueden sobrescribir archivos de idioma completos o áreas concretas de una funcionalidad.
- *Comprobación del esquema* – si un paquete de branding no encaja con la versión en ejecución, se avisa en lugar de fallar en silencio.
- *La página de mantenimiento y los correos* usan ahora el mismo branding que el resto de la red.

## Para operadores de red

- 🚫 *Los grupos se pueden desactivar* – las redes sin la función de grupos ahora la ocultan por completo
- 🔗 *Los enlaces a redes sociales se pueden desactivar* – enlazar perfiles externos es opcional
- 🏷️ *Renombrar roles* – los roles se pueden adaptar al lenguaje de vuestra propia comunidad
- ⚠️ *Conflictos de edición* – los cambios simultáneos en roles y políticas se detectan y resuelven limpiamente en lugar de sobrescribirse entre sí
- 🔧 La pestaña de configuración del sistema vuelve a funcionar correctamente

## Para desarrolladores

- 📖 *Documentación de la API* – la interfaz GraphQL está ahora documentada
- 🧪 Mayor cobertura de tests en la webapp y una cadena de CI propia para el paquete de branding

## Errores corregidos

- Los avatares de vídeo se muestran correctamente y su navegación está reparada
- Campos de ubicación y sus menús corregidos, textos de ayuda duplicados eliminados
- Las listas en las páginas de perfil se filtran correctamente
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
