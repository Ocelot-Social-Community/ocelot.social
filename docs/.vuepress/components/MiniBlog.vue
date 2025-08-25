<script setup>
import { computed } from "vue";
import { useRouteLocale } from "vuepress/client";
import articles from "@temp/mini-blog.articles.json"; // kommt aus dem Build-Hook

const locale = useRouteLocale();

// Nur Artikel des aktuellen Locales + Top 3
const items = computed(() => {
  const loc = locale.value || "/";
  const list = (articles || []).filter(a => a.locale === loc);
  return list.slice(0, 3);
});

const articleIndex = computed(() =>
  (locale.value === "/" ? "/article/" : `${locale.value}article/`)
);

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
</script>

<template>
  <section class="mini-blog">
    <div v-if="items.length" class="mini-blog__grid">
      <article v-for="post in items" :key="post.path" class="card">
        <RouterLink :to="post.path" class="card__media" aria-label="Zum Artikel">
          <img v-if="post.cover" :src="post.cover" :alt="post.title" loading="lazy" />
          <div v-else class="card__placeholder" aria-hidden="true"></div>
        </RouterLink>

        <div class="card__body">
          <RouterLink :to="post.path" class="card__title">
            {{ post.title }}
          </RouterLink>

          <div class="card__meta">
            <time v-if="post.date" class="card__date">{{ formatDate(post.date) }}</time>
            <ul v-if="post.tags?.length" class="card__tags">
              <li v-for="t in post.tags" :key="t" class="card__tag">#{{ t }}</li>
            </ul>
          </div>

          <p v-if="post.excerpt" class="card__excerpt" v-html="post.excerpt"></p>

          <RouterLink :to="post.path" class="card__more">Weiterlesen →</RouterLink>
        </div>
      </article>
    </div>

    <div v-else class="mini-blog__empty">
      <p>Keine Artikel im aktuellen Locale gefunden.</p>
    </div>

    <!-- <div id="hero-button" class="mini-blog__footer">
      <RouterLink :to="articleIndex" class="mini-blog__all">Alle Artikel ansehen</RouterLink>
    </div> -->
    <a id="hero-button mini-blog__footer" :href="articleIndex">
      <Button class="mini-blog__all">
        Alle Artikel ansehen
      </Button>
    </a>
  </section>
</template>

<style scoped>
/* Abschnitt */
.mini-blog {
  max-width: 1100px;
  margin-top: 2rem;
}
.mini-blog__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Grid */
.mini-blog__grid {
  margin: auto 20px;
  display: grid;
  gap: 1.8rem 1.2rem;
  grid-template-columns: 1fr;
}
@media (min-width: 720px) {
  .mini-blog__grid { grid-template-columns: repeat(3, 1fr); }
}

/* Card */
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider, rgba(0,0,0,.08));
  background: var(--vp-c-bg, #fff);
  box-shadow: var(--vp-shadow-1, 0 1px 2px rgba(0,0,0,.05));
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2, 0 8px 24px rgba(0,0,0,.12));
  border-color: var(--vp-c-brand-1, rgba(0,0,0,.14));
}

/* Media */
.card__media {
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0,0,0,.06), rgba(0,0,0,.02));
}
.card__media img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.card__placeholder {
  width: 100%; height: 100%;
  background: repeating-linear-gradient(45deg, rgba(0,0,0,.06), rgba(0,0,0,.06) 10px, rgba(0,0,0,.03) 10px, rgba(0,0,0,.03) 20px);
}

/* Body */
.card__body { padding: .9rem 1rem 1rem; display: grid; gap: .5rem; }
.card__title {
  font-weight: 700; line-height: 1.25; text-decoration: none;
  color: var(--vp-c-text-1, inherit);
}
.card__title:hover { text-decoration: underline; }

/* Meta */
.card__meta { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; font-size: .875rem; }
.card__date { opacity: .75; }
.card__tags { display: flex; gap: .35rem; list-style: none; padding: 0; margin: 0; }
.card__tag {
  padding: .1rem .45rem; border-radius: 999px; font-size: .75rem;
  background: var(--vp-c-brand-soft, rgba(0,0,0,.06)); color: var(--vp-c-brand-1, inherit);
}

/* Excerpt */
.card__excerpt { margin: .25rem 0 0; opacity: .9; }

/* Footer */
.card__more { margin-top: .25rem; font-weight: 600; text-decoration: none; }
.card__more:hover { text-decoration: underline; }
.mini-blog__footer { margin-top: 1rem; }
.mini-blog__all { text-decoration: none; font-weight: 600; }

/* Empty */
.mini-blog__empty { opacity: .8; }
</style>
