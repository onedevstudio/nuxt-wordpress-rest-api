<template>
  <header class="site-header" role="banner">
    <div class="site-header__inner">
      <nuxt-link to="/"><Logo /></nuxt-link>
      <h1 class="site-title">
        <nuxt-link to="/">{{ siteSettings.title }}</nuxt-link>
      </h1>
      <div class="site-description">{{ siteSettings.description }}</div>
      <Nav :items="pageLinks" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SiteHeader',
  components: {
    Logo: () => import('@/components/Logo.vue'),
    Nav: () => import('@/components/Nav.vue'),
  },
  computed: {
    ...mapState({
      siteSettings: ({ settings }) => settings.siteSettings,
      pageLinks: ({ page }) => [
        { title: 'Home', slug: '' },
        { title: 'Blog', slug: 'blog' },
        ...page.links,
      ],
    }),
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2.857143rem 0;
  text-align: center;

  a {
    box-shadow: none;
  }

  a:hover {
    text-decoration: none;
  }

  .site-title {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
  }

  .site-description {
    font-size: 1.142857rem;
    color: #6d6d6d;
  }
}
</style>
