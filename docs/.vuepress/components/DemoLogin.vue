<template>
  <div :class="{ center: centered }">
    <p>
      {{ labelIntroBefore }}
      <a href="https://stage.ocelot.social" target="_blank" rel="noopener noreferrer">https://stage.ocelot.social</a>
      {{ labelIntroAfter }}
    </p>

    <table>
      <thead>
        <tr>
          <th style="text-align:left;">{{ labelEmail }}</th>
          <th style="text-align:left;">{{ labelPassword }}</th>
          <th style="text-align:left;">{{ labelRole }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:left;"><code>user@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ labelUserRole }}</td>
        </tr>
        <tr>
          <td style="text-align:left;"><code>moderator@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ labelModeratorRole }}</td>
        </tr>
        <tr>
          <td style="text-align:left;"><code>admin@example.org</code></td>
          <td style="text-align:left;">1234</td>
          <td style="text-align:left;">{{ labelAdminRole }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  labelIntroBefore: { type: String, required: true },
  labelIntroAfter: { type: String, required: true },
  labelEmail: { type: String, required: true },
  labelPassword: { type: String, required: true },
  labelRole: { type: String, required: true },
  labelUserRole: { type: String, required: true },
  labelModeratorRole: { type: String, required: true },
  labelAdminRole: { type: String, required: true },
  centered: { type: Boolean, default: true },
})
</script>
