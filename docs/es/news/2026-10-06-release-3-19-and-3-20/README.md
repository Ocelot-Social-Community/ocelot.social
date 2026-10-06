---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-10-06
category:
  - Releases
tag:
  - Releases
  - Mapas
  - Eventos
  - Grupos
  - Video
cover: /blog/ocelot-social-release-v3-19+20.png
coverAlt: "Ocelot.social Versión 3.19 Map Cat"
title: "Ocelot.social 3.19+20 «Map Cat» – ¿Dónde pasa qué? Más mapas para una mejor orientación 🗺️"
description: "Con ocelot.social 3.19 «Map Cat» ves en más páginas dónde pasa qué: mapas para eventos, usuarios y grupos, un nuevo diseño de ventanas emergentes y una leyenda para el mapa general. Esta entrada también resume las mejoras menores de la versión 3.20."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Con *ocelot.social* 3.19 «Map Cat» ves en más páginas dónde pasa qué. En esta versión se trata sobre todo de hacer visibles en mapas los eventos, usuarios y grupos, y de poder editarlos ahí con mayor comodidad. 💚

Además, se ha mejorado mucho el software y se han hecho cambios por debajo del capó. Encontrarás los detalles en esta entrada, incluidas las mejoras menores de la versión siguiente, la 3.20.

## Mapas

### Eventos

- Crear y editar, ahora con mapa: fijar y mover la ubicación exacta con el ratón
- Vista del evento: mapa con la ubicación para la vista, con enlace al mapa general

<!-- TODO: captura de pantalla del evento con mapa: /blog/release-3.19-event-map--es.png -->

### Usuarios y grupos

- Crear y editar, ahora con mapa: la ubicación ahora se puede fijar y mover con el ratón, con precisión de barrio
- Mapa con la ubicación en el perfil del usuario o del grupo, con enlace al mapa general

<!-- TODO: captura de pantalla del perfil con mapa: /blog/release-3.19-profile-map--es.png -->

### Mapa general

- Colocar un pin de evento directamente en el mapa para crear un evento
- Nuevo diseño para las ventanas emergentes
- Leyenda: mostrar y ocultar capas, mostrar eventos pasados

<!-- TODO: captura de pantalla del mapa general con leyenda: /blog/release-3.19-main-map-legend--es.png -->

## Crear y editar publicaciones y perfiles

Para publicaciones, usuarios y grupos:

- mejor validación de los datos introducidos, con comentarios comprensibles
- aviso de cambios sin guardar al abandonar la página

## Videollamadas

- icono de micrófono en los mosaicos de vídeo: ahora se ve claramente quién está silenciado
- el audio se mantiene al apagar la cámara: ya no se pierde el sonido durante las videollamadas

## Vista general de publicaciones – Feed de noticias

Visualización notablemente más rápida: el software se ha optimizado significativamente en este aspecto.

## Por debajo del capó

### Una nueva base

En esta versión se ha ordenado mucho entre bastidores, algo que notarás en la velocidad y la estabilidad. Para quienes les interese la parte técnica:

- declaración de esquema propia en el backend: las antiguas bibliotecas de base de datos (neode, neo4j-graphql-js) han desaparecido por completo
- backend migrado a módulos modernos: pruebas migradas de Jest a Vitest y paralelizadas
- migración de yarn a npm, imágenes Docker más pequeñas, compatibilidad con Node 26
- lanzamientos y registro de cambios automatizados: las versiones y notas de lanzamiento se generan ahora directamente a partir de los commits
- más cobertura de pruebas y una comprobación automática de cambios visuales no deseados en la interfaz

## Correcciones y limpieza

- las notificaciones en grupos ocultos vuelven a funcionar correctamente
- se ha corregido la vista previa de la descripción del grupo
- los favicons se sirven correctamente
- los enlaces a redes sociales que el navegador no debe seguir ya no se renderizan en absoluto
- además, pruebas e2e más estables
- flujos de Docker y CI reparados
- así como numerosas actualizaciones de dependencias por seguridad y estabilidad

## Además: versión 3.20 — mejoras menores

Poco después de la 3.19 llegó la 3.20, una versión más pequeña que pule algunos detalles y sienta las bases para los futuros permisos de grupo.

- *Crear un grupo* – el tipo de grupo se elige ahora mediante tarjetas en lugar de un desplegable; los tipos que no se pueden elegir se muestran con el motivo, en lugar de simplemente faltar
- *Ubicaciones* – el perfil vuelve a mostrar el lugar que realmente seleccionaste, en lugar del barrio en el que casualmente cae el pin; el campo de ubicación ya no se vacía cuando los resultados de búsqueda llegan tarde
- *Botones* – los botones primarios y de peligro rellenos ahora se oscurecen al pasar el ratón, en lugar de desvanecerse a un tono claro apenas legible
- *Traducciones* – cada idioma usa ahora sus propias comillas, junto con varias correcciones de traducción y gramática
- también se ha corregido: el botón de corazón sobredimensionado en los comentarios y un guion sobrante al final de las direcciones de las nuevas publicaciones

### Seguridad

Un fallo en `JoinGroup` permitía indicar cualquier `userId` sin comprobación: cualquier persona identificada podría haber añadido a otra persona a un grupo público, o enviado en su nombre una solicitud de ingreso a un grupo cerrado. A partir de ahora, solo puede hacerlo la administración o la propiedad del grupo.

### Para administradores de red y desarrolladores

- `Group.groupType` queda obsoleto como campo; las nuevas integraciones deberían usar `Group.visibility` (los mismos tres valores)
- la imagen de MinIO ahora se ejecuta sin privilegios de root en desarrollo y pruebas (base Chainguard); los volúmenes de datos locales existentes necesitan un cambio de propietario único (chown)
- saltos de versión mayores en algunas dependencias, entre ellas @sentry/node

## Registro de cambios completo

Encontrarás todos los detalles en el [registro de cambios](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), así como en las notas de la versión [3.19.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.19.0) y [3.20.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.20.0).

## ¿Qué viene a continuación?

Como siempre, encontrarás los próximos pasos previstos en nuestra [hoja de ruta](/es/roadmap/).

## Apoya a ocelot.social

El software libre vive de ti y de la comunidad. Si te gusta *ocelot.social*, seguimos agradeciendo cualquier apoyo:

- [Donar](/es/donate/)
- [Contribuir](/es/contribute/)
- [Gestionar tu propia red](/es/get-started/)
