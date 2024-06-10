# ocelot.social Website

This repository contains the Website <https://ocelot.social> utilizing `vuepress` to generate it.

## Software requirements

This package requires:

- [nodejs](https://github.com/nodejs/node)
- [npm](https://github.com/npm/cli)

## Techstack

This package uses:

- [vuepress](https://github.com/vuejs/vuepress)
- [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)
<!-- - [vuepress-deploy](https://github.com/jenkey2011/vuepress-deploy) -->

## Usage

How to use this package.

### Build

Build the static files of the website which then can be found under `docs/.vuepress/dist/`.

```bash
npm run build
```

### Dev

Bring up a development environment with hot reloading which can be reached under <http://localhost:8080/>:

```bash
npm run dev
```

### Test

Run the tests to ensure everything is working as expected:

```bash
# general tests
$ npm test
# test linting
$ npm test:lint
# fix linting
$ npm test:lint:fix
```

<!-- ## Deploy

You can use the webhook template `webhook.conf.template` and the `deploy.sh` script in `.github/webhooks/` for an automatic deployment from a (github) webhook.

For this to work follow these steps (using alpine):

```bash
apk add webhook
cp .github/webhooks/hooks.json.template .github/webhooks/hooks.json
vi .github/webhooks/hooks.json
# adjust content of .github/webhooks/hooks.json
# replace all variables accordingly

# copy webhook service file
cp .github/webhooks/webhook.template /etc/init.d/webhook
vi /etc/init.d/webhook
# adjust content of /etc/init.d/webhook
chmod +x /etc/init.d/webhook

service webhook start
rc-update add webhook boot

vi /etc/nginx/http.d/default.conf
# adjust the nginx config
# location /hooks/ {
#     proxy_http_version 1.1;
#     proxy_set_header   Upgrade $http_upgrade;
#     proxy_set_header   Connection 'upgrade';
#     proxy_set_header   X-Forwarded-For $remote_addr;
#     proxy_set_header   X-Real-IP  $remote_addr;
#     proxy_set_header   Host $host;
# 
#     proxy_pass         http://127.0.0.1:9000/hooks/;
#     proxy_redirect     off;
# 
#     #access_log $LOG_PATH/nginx-access.hooks.log hooks_log;
#     #error_log $LOG_PATH/nginx-error.backend.hook.log warn;
# }
```

For the github webhook configure the following:

| Field                                                | Value                         |
|------------------------------------------------------|-------------------------------|
| Payload URL                                          | <https://it4c.dev/hooks/github> |
| Content type                                         | application/json              |
| Secret                                               | A SECRET                      |
| SSL verification                                     | Enable SSL verification       |
| Which events would you like to trigger this webhook? | Send me everything.           |
| Active                                               | [x]                           |

## How it works

This repository utilizes `vuepress-deploy` to automatically deploy the current `master` branch to github pages.

![repo-architecture](./docs/images/docs/architecture.png)

A Pullrequest-Review-Workflow is applied to get changes into the `master`. From there on an automatic github workflow script utilizing `vuepress-deploy` is taking over. The vuepress page is built and force-pushed to the `gh-pages` branch, which in turn is then deployed on the github pages infrastructure and bound to the web address [IT4C.dev](https://www.it4c.dev). -->
