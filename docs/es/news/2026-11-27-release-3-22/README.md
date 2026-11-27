---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-11-27
category:
  - Releases
tag:
  - Releases
  - Modo oscuro
  - Video
  - Chat
  - Privacidad
cover: /blog/ocelot-social-release-v3-22.png
coverAlt: "Ocelot.social Versión 3.22 Night Watch"
title: "Ocelot.social 3.22 «Night Watch» – Modo oscuro, y las videollamadas se hacen mayores 🌙"
description: "Con ocelot.social 3.22 «Night Watch», la red recibe un modo oscuro, las videollamadas reciben una lista de participantes, un chat propio y un lugar junto al feed – y los grupos cerrados y los bloqueos se aplican ahora en el servidor."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Los ocelotes son animales nocturnos – y con *ocelot.social* 3.22 «Night Watch», tu red también puede serlo: por fin hay un modo oscuro. Las videollamadas también dan un gran paso adelante, y entre bastidores el servidor vigila ahora los grupos cerrados y los bloqueos, en lugar de dejarlo en manos de los formularios. 💚

## Lo más destacado: modo oscuro

<!-- TODO: screenshot dark mode: /blog/release-3.22-dark-mode--es.png -->

- Toda la red – páginas, chat, videollamadas y mapas – está ahora disponible con un diseño oscuro, con un interruptor para elegir entre claro y oscuro.
- Los navegadores más antiguos también reciben el diseño oscuro.
- Las superficies y cintas de color se oscurecen lo justo para seguir siendo fáciles de leer.
- Cada red decide por sí misma si ofrece el modo oscuro: una red con su propia marca se mantiene clara hasta que activa el modo oscuro.

## Videollamadas

- La llamada ocupa mucho más espacio en la pantalla y puede pasar a pantalla completa.
- Una lista de participantes, con filtro, muestra quién está en la llamada – y desde ella se modera la llamada.
- Cada llamada tiene su propio chat, compartido solo por las personas que participan en ella, que se puede descargar después.
- Las llamadas en curso se muestran en un dock junto al feed, para que veas de un vistazo dónde se está hablando.
- Tú eliges la calidad de vídeo que una llamada envía y recibe.
- Cuando tu ordenador no da abasto, las cámaras dan un paso atrás y te lo indican – y puedes deshacerlo.
- Ahora se oye el sonido de una pantalla compartida, se reconecta a quien habla cuando dejaba de llegar a alguien que escucha, y el micrófono sigue enviando durante las pausas al hablar, lo que hace el sonido más fiable (configurable por red y por llamada).

## Chat

- Cada chat conserva el mensaje que empezaste pero aún no has enviado.
- Un botón te lleva al mensaje no leído más antiguo.
- Un mensaje en el chat de grupo llega ahora en directo a cada miembro – incluso a dos miembros que se bloquean o silencian entre sí.

## Escritura

- Ctrl+K (Cmd+K en un Mac) abre el campo de enlace – en el texto seleccionado o, si no hay nada seleccionado, en la posición del cursor.
- La barra de menú del editor permanece visible mientras escribes textos largos.
- Las menciones y hashtags sin terminar se marcan.
- La leyenda de atajos de teclado muestra las teclas de tu sistema.

## Notificaciones

Una nueva publicación, o un comentario que te menciona en una publicación que observas, aparece ahora una sola vez – en lugar de una vez por cada motivo.

## Permisos y roles

- Un rol con `role.manage` puede ahora configurar libremente cualquier rol excepto el de propietario.
- Los roles fijos de la red se muestran traducidos.
- La página de roles puede descartar los cambios no guardados.
- Al guardar los permisos de un grupo, se avisa antes de conceder – o renunciar a – el permiso de editar los roles.

## Privacidad: grupos cerrados y bloqueos

- Al contenido de un grupo cerrado u oculto se podía llegar sin pasar por el grupo de varias maneras. Esas diez vías están ahora cerradas, y quien abandona un grupo así ya no lee sus comentarios ni recibe notificaciones sobre ellos.
- Un bloqueo pone fin ahora a los comentarios y al chat directo en el servidor, no solo en el formulario.
- Las actualizaciones en directo vuelven a comprobar tus permisos a los 30 segundos, y de inmediato cuando cambian – así, un permiso que has perdido ya no sigue entregando actualizaciones en directo.

## Correcciones

- Un grupo se puede volver a guardar en una red sin categorías.
- Los avatares mantienen sus iniciales legibles mientras se carga su imagen.
- Las descripciones emergentes muestran su contenido como texto.
- Pequeñas correcciones en los espacios de los formularios, las etiquetas de los campos y lo que queda fijo bajo la cabecera.

## Por debajo del capó

- Las pruebas del servidor se ejecutan ahora sobre Redis, y una nueva prueba hace funcionar dos servidores con un mismo Redis. Encontró tres errores, todos corregidos: una caída de Redis detenía el servidor, los números llegaban deformados a través de Redis, y dos servidores que arrancaban a la vez podían chocar.
- Una instancia del servidor que se perdió un cambio en las políticas o los roles de la red lo recupera en menos de un minuto.
- Los comentarios y las consultas de grupos preguntan menos veces a la base de datos.
- El servidor comprueba ahora lo que antes solo comprobaban los formularios: categorías, slugs de usuario y longitud de los nombres de grupo. Los límites de los títulos de las publicaciones se pueden fijar por red.
- TypeScript 6 en el backend y en la página de mantenimiento.

## Para desarrolladores

- Los campos de ActivityPub `User.actorId`, `User.publicKey`, `Post.activityId`, `Post.objectId` y `Comment.activityId` quedan obsoletos; los proxies `/.well-known/webfinger` y `/activitypub` de la webapp se han eliminado
- Las mutaciones rechazan categorías desconocidas, slugs de usuario no válidos y nombres de grupo fuera de los límites de longitud de la marca
- Las migraciones se ejecutan automáticamente al arrancar: las notificaciones duplicadas se reducen a una por publicación o comentario y destinatario, y el rol `admin` de cada grupo y de cada plantilla de roles de grupo recibe el nuevo permiso `group.videoCall.moderate`
- nueva política `videoCallDtx`, por defecto `false`
- `packages/ui` 0.0.9 (OsDrawer, diálogo de confirmación, tamaños de modal), `packages/branding` 0.2.5

## Para administradores de red

Dos cambios detienen un despliegue si se pasan por alto:

- **`PRODUCTION_DB_CLEAN_ALLOW` se llama ahora `DB_WIPE_ALLOWED`.** Restablecer y sembrar la base de datos solo borra donde `DB_WIPE_ALLOWED="true"`; `NODE_ENV` ya no decide. Un staging que vuelve a sembrar renombra la variable; producción simplemente la elimina.
- **Los repositorios de marca pasan de `branding/` a `brandings/<nombre>/`** (más `overlays/` para código y datos). Un repositorio con la estructura antigua ya no se compila. Un repositorio puede contener ahora varias marcas; con más de una, define `OCELOT_ACTIVE_BRANDING`.

También conviene saber:

- El modo oscuro es opcional por marca: `theme.colorScheme: 'light dark'`. Una marca también puede fijar el estilo del mapa para cada tema.
- La webapp se ejecuta ahora con dos réplicas y un PodDisruptionBudget, de modo que vaciar un nodo ya no provoca una breve interrupción – a cambio del doble de memoria para la webapp. `webapp.replicas: 1` mantiene el comportamiento anterior; un clúster de un solo nodo define `webapp.podDisruptionBudget: false`.

Todos los pasos se describen en [`deployment/TODO-next-update.md`](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/deployment/TODO-next-update.md).

## Registro de cambios completo

Encontrarás todos los detalles en el [registro de cambios](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), así como en las notas de versión de [3.22.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.22.0).

## ¿Qué viene a continuación?

Como siempre, encontrarás los próximos pasos previstos en nuestra [hoja de ruta](/es/roadmap/).

## Apoya a ocelot.social

El software libre vive de ti y de la comunidad. Si te gusta *ocelot.social*, seguimos agradeciendo cualquier apoyo:

- [Donar](/es/donate/)
- [Contribuir](/es/contribute/)
- [Gestionar tu propia red](/es/get-started/)
