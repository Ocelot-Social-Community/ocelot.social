<template>
  <div :class="{ center: centered }">
    <p>
      {{ t.introBefore }}
      <a href="https://stage.ocelot.social" target="_blank" rel="noopener noreferrer">https://stage.ocelot.social</a>
      {{ t.introAfter }}
    </p>

    <table>
      <thead>
        <tr>
          <th style="text-align:left;">{{ t.email }}</th>
          <th style="text-align:left;">{{ t.password }}</th>
          <th style="text-align:left;">{{ t.role }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:left;"><code>user@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ t.userRole }}</td>
        </tr>
        <tr>
          <td style="text-align:left;"><code>moderator@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ t.moderatorRole }}</td>
        </tr>
        <tr>
          <td style="text-align:left;"><code>admin@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ t.adminRole }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouteLocale } from "vuepress/client"

defineProps({
  centered: { type: Boolean, default: true },
})

const i18n = {
  "/de/": {
    introBefore: "Teste die Live-Demo auf",
    introAfter: "mit den folgenden Zugangsdaten:",
    email: "E-Mail",
    password: "Passwort",
    role: "Benutzerrolle",
    userRole: "normaler Nutzer",
    moderatorRole: "Moderator",
    adminRole: "Administrator",
  },
  "/en/": {
    introBefore: "Test the live demo at",
    introAfter: "with the following access data:",
    email: "E-mail",
    password: "Password",
    role: "User role",
    userRole: "normal user",
    moderatorRole: "moderator",
    adminRole: "administrator",
  },
  "/es/": {
    introBefore: "Prueba la demo en vivo en",
    introAfter: "con los siguientes datos de acceso:",
    email: "E-mail",
    password: "Contraseña",
    role: "Rol de usuario",
    userRole: "usuario normal",
    moderatorRole: "moderador",
    adminRole: "administrador",
  },
  "/fr/": {
    introBefore: "Testes la démo en direct sur",
    introAfter: "avec les données d\u0027accès suivantes :",
    email: "Courriel",
    password: "Mot de passe",
    role: "Rôle de l\u0027utilisateur",
    userRole: "utilisateur normal",
    moderatorRole: "modérateur",
    adminRole: "administrateur",
  },
}

const locale = useRouteLocale()
const t = computed(() => i18n[locale.value] ?? i18n["/en/"])
</script>
