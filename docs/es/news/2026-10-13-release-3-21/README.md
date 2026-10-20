---
home: false
article: true
sidebar: false
lang: es-ES
date: 2026-10-13
category:
  - Releases
tag:
  - Releases
  - Grupos
  - Permisos
  - Privacidad
  - Video
cover: /blog/ocelot-social-release-v3-21.png
coverAlt: "Ocelot.social Versión 3.21 Pack Leader"
title: "Ocelot.social 3.21 «Pack Leader» – Permisos de grupo: ¿quién puede hacer qué en tu grupo? 🐾"
description: "Con ocelot.social 3.21 «Pack Leader», cada grupo recibe su propio sistema de permisos: los roles, configurados a partir de plantillas, deciden quién puede encontrar, leer, unirse, publicar o invitar a un grupo. Además, mejoras en las videollamadas y las menciones, y un aviso importante de privacidad sobre los gritos (shouts)."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Con *ocelot.social* 3.21 «Pack Leader», los nombres sueltos de los roles se convierten en un verdadero sistema de permisos para los grupos. Lo que la versión 3.20 ya había preparado queda ahora completamente conectado: dentro de cada grupo ya no deciden los nombres de los roles ni el tipo de grupo, sino permisos concretos, concedidos de forma individual. 💚

Encontrarás los detalles en esta entrada, incluidas las correcciones de las versiones 3.21.1 y 3.21.2, publicadas justo después.

## Lo más destacado: gestión de permisos de grupo

Cada grupo tiene ahora roles con sus propios permisos, configurados a partir de una plantilla que proporciona la red.

<!-- TODO: captura de pantalla pestaña de permisos del grupo: /blog/release-3.21-group-rights-tab--es.png -->

- En la nueva sección *Permisos* de los ajustes del grupo se puede definir qué puede hacer cada rol: encontrar el grupo, leerlo, unirse, publicar, invitar… una lista detallada por rol, mostrada en una vista sencilla.
- Los roles de los miembros se pueden cambiar.
- Una persona administradora de la red puede entrar en un grupo indicando un motivo, para administrar un grupo que se ha quedado sin propietario.
- Las personas administradoras de grupo obtienen plantillas de roles de toda la red y una lista de todos los grupos que pueden gestionar.
- Al salir de una página con cambios sin guardar en permisos, roles o configuración, ahora se pregunta si quieres descartarlos.

## Videollamadas

- La cámara, el micrófono y el altavoz se pueden cambiar ahora durante una llamada.
- Unirse es más rápido, cada mosaico muestra la calidad de la conexión, y con una conexión débil la llamada pasa a solo audio en lugar de cortarse.
- Ahora se avisa cuando el navegador bloquea el sonido o el micrófono solo entrega silencio, con un botón para solucionarlo directamente.

## Escritura: menciones y hashtags

- Las menciones y los hashtags que se sugieren mientras escribes se agrupan ahora según su relación contigo (implicados en la publicación, miembros del grupo, personas que sigues… tus propios hashtags, los populares, los nuevos).

## Errores en tu idioma

Los errores que reporta el servidor se muestran ahora traducidos, con el motivo real.

## Privacidad: gritos (shouts) públicos

⚠️ **Aviso importante para administradores de redes:** el ajuste `showShoutsPublicly` se guardaba desde 2021, pero nunca se aplicaba realmente: los gritos de todo el mundo eran visibles para todos, independientemente del ajuste. Esto se corrige ahora, pero el nuevo valor por defecto es **público**, y una migración pone a «público» a todas las personas usuarias existentes, incluidas las que lo habían desactivado.

Por favor, anuncia esto a tu comunidad e indica a las personas usuarias que vayan a *Ajustes → Privacidad* si quieren volver a restringir sus gritos.

Además: un rol de administración personalizado sin los permisos de participación de una persona usuaria normal (por ejemplo, uno que solo pueda eliminar cuentas) no podía antes actuar sobre nadie. La jerarquía entre personas usuarias se ordena ahora únicamente por nivel de autoridad, y un rechazo indica el motivo.

## Correcciones de la 3.20.0 a la 3.21.2

- Se corrige el rechazo indebido de lugares con nombre traducido en una interfaz que no está en inglés.
- Las vistas previas de enlaces sin imagen vuelven a funcionar.
- Se corrigen diversos fallos al mencionar y comentar.
- Se corrige un error de servidor que aparecía al visitar páginas sin el permiso necesario.
- El aviso sobre un permiso de grupo limitado por la red indica ahora el permiso de red que falta.
- Una página de grupo ahora sigue los cambios en los permisos de red de quien la ve, sin necesidad de recargar.
- Dos correcciones en los nuevos permisos de grupo: los permisos de red solo surten efecto en un grupo después de «entrar» en él, y un rol con el permiso `role.manage` ahora solo puede gestionar roles que estén por debajo o le pertenezcan.
- Se cierran varias lagunas en las notificaciones: los miembros y contactos de chat sin dirección de correo vuelven a recibir sus notificaciones, quien ha dejado de seguir su propia publicación sigue enterándose de las menciones en sus comentarios, y las nuevas publicaciones en grupos y de personas que sigues llegan ahora en directo al menú de notificaciones.
- Bloquear funciona ahora de forma más fiable: termina automáticamente con el seguimiento mutuo, las personas bloqueadas ya no reciben notificaciones de nuevas publicaciones, y volver a seguir espera a que se desbloquee.
- El registro y los eventos guardan ahora el lugar realmente seleccionado, en lugar de tomar automáticamente el primer resultado de búsqueda de Mapbox.
- Una videollamada que todo el mundo ha abandonado se queda ahora correctamente en 0 participantes.
- Otras correcciones menores: el «mostrar más» de las descripciones de grupo, el filtro de notificaciones vuelve a empezar en la primera página, y un avatar recién subido aparece de inmediato en el menú.

## Por debajo del capó

- Acceso a grupos: antes solo tipos de grupo y nombres de roles, ahora una gestión detallada de permisos y roles, basada en plantillas.
- La posibilidad de encontrar un grupo se deriva ahora de lo que puede hacer el rol de no-miembro, en lugar de un tipo de grupo guardado.
- Errores traducidos: un registro central de códigos explicativos en el servidor se traduce en el navegador.
- Las sugerencias de menciones y hashtags se consultan mientras se escribe, en lugar de cargarse todas de antemano.
- La integración continua (CI) en `master` se omite cuando la cola de fusión ya ha probado ese mismo commit.
- Las imágenes base de Docker Hub pasan ahora por `mirror.gcr.io` en lugar de descargarse directamente.
- La webapp sirve ahora el CSS como archivos cacheables en lugar de incrustarlo en cada página, lo que acorta los tiempos de carga.
- El service worker carga ahora Workbox desde el propio origen de la instancia en lugar de jsdelivr, y en producción ya no se sirve una página de inicio de GraphQL; ambos cambios reducen lo que se carga desde terceros.

## Para desarrolladores

- `groupType` desaparece por completo: `Group.groupType`, el enum `GroupType` y los argumentos `groupType` de `CreateGroup`/`UpdateGroup` se eliminan. Usa `template` al crear y `visibility` al actualizar. Recién marcados como obsoletos: `Group.myRole` → `myGroupRole`, `ChangeGroupMemberRole` → `setGroupMemberRole`
- Las migraciones se ejecutan automáticamente al iniciar: los grupos existentes pasan a plantillas de roles y obtienen sus roles, los roles de red guardados reciben los nuevos permisos de grupo, y los permisos `videoCall.create_*` según el tipo pasan a `videoCall.create_open` / `create_restricted`. Los gritos se vuelven públicos para todas las personas usuarias en el proceso (ver el aviso de privacidad más arriba)
- Contrato de errores: los errores de cara al usuario llevan ahora `extensions.errorCode` (y `params`); `message` sigue en inglés. Los errores `PASSWORD_CHANGE_*` son ahora `BAD_USER_INPUT` en lugar de `UNAUTHENTICATED`. Cada evento necesita un lugar de entre 3 y 100 caracteres, y se rechaza denunciar la propia publicación o el propio comentario
- `CLIENT_URI` para la webapp y la página de mantenimiento hace que `og:image` sea absoluta; el chart de Helm lo define a partir de `domain`, otros despliegues deberían fijarlo al origen propio de su instancia
- `CreateGroup`, `UpdateGroup` y `UpdateUser` aceptan ahora opcionalmente un `locationId`
- los tokens de acceso a videollamadas caducan ahora a los 10 minutos en lugar de a las 2 horas
- saltos de versión mayores: dotenv 17 → 18, tslog 4 → 5, vue-apollo 3.0.2 → 3.1.2
- novedad en 3.21.1: `Group.networkPrerequisites` como campo adicional; no se ha eliminado ni cambiado nada

## Para administradores de red

Si tienes tu propio cliente contra la API, la eliminación de `groupType` y los nuevos códigos de error son lo primero que deberías revisar. Si gestionas tu propia red, la migración de los gritos es lo que deberías comunicar a tus personas usuarias.

## Registro de cambios completo

Encontrarás todos los detalles en el [registro de cambios](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), así como en las notas de versión de [3.21.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.0), [3.21.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.1) y [3.21.2](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.2).

## ¿Qué viene a continuación?

Como siempre, encontrarás los próximos pasos previstos en nuestra [hoja de ruta](/es/roadmap/).

## Apoya a ocelot.social

El software libre vive de ti y de la comunidad. Si te gusta *ocelot.social*, seguimos agradeciendo cualquier apoyo:

- [Donar](/es/donate/)
- [Contribuir](/es/contribute/)
- [Gestionar tu propia red](/es/get-started/)
