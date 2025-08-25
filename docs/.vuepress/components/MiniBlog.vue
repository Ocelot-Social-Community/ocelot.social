<script setup>
import { computed } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/client"; // Theme Hope Blog-Plugin
import { useRouteLocale, RouteLink } from "vuepress/client";

// Alle Blog-Artikel (Type "article") holen
const articles = useBlogType("article");

// Aktuelles Locale ("/" oder z. B. "/de/")
const locale = useRouteLocale();

// Nur Posts unter /news/ für das aktuelle Locale
const newsPrefix = computed(() => `${locale.value}news/`);

const items = computed(() => {
  const list = (articles.value?.items ?? [])
    .filter((p) => p.path.startsWith(newsPrefix.value))
    .sort((a, b) => {
      const ta = a.info?.date ? new Date(a.info.date).getTime() : 0;
      const tb = b.info?.date ? new Date(b.info.date).getTime() : 0;
      return tb - ta; // neueste zuerst
    })
    .slice(0, 3);
  return list;
});

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
</script>

<template>
  <section class="mini-blog">
    <h2 class="mini-blog__title">Neueste News</h2>

    <ul class="mini-blog__list">
      <li v-for="post in items" :key="post.path" class="mini-blog__item">
        <RouteLink :to="post.path" class="mini-blog__link">
          <strong class="mini-blog__headline">{{ post.info?.title }}</strong>
          <span v-if="post.info?.date" class="mini-blog__date">— {{ formatDate(post.info.date) }}</span>
        </RouteLink>

        <div
          v-if="post.info?.excerpt"
          class="mini-blog__excerpt"
          v-html="post.info.excerpt"
        />
      </li>
    </ul>

    <RouteLink :to="newsPrefix" class="mini-blog__more">Mehr News →</RouteLink>
  </section>
</template>

<style scoped>
.mini-blog { margin-top: 2rem; }
.mini-blog__title { font-size: 1.25rem; margin-bottom: .75rem; }
.mini-blog__list { list-style: none; padding: 0; margin: 0; display: grid; gap: .75rem; }
.mini-blog__item { padding: .75rem 1rem; border: 1px solid var(--vp-c-divider); border-radius: .5rem; }
.mini-blog__link { text-decoration: none; display: inline-flex; align-items: baseline; gap: .35rem; }
.mini-blog__headline { font-weight: 600; }
.mini-blog__date { opacity: .7; }
.mini-blog__excerpt { margin-top: .35rem; opacity: .9; }
.mini-blog__more { display: inline-block; margin-top: .75rem; }
</style>
