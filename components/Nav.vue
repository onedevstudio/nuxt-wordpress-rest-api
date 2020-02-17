<template>
  <nav class="page-nav" aria-label="Horizontal" role="navigation">
    <nuxt-link
      v-for="(item, k) in items"
      :key="k"
      :class="`page-nav__link page-nav__link-${item.slug}`"
      :to="`/${item.slug}`"
    >
      <span v-text="item.title" />
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.page-nav {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.9375rem /* 15/16 */;
  text-align: center;
  margin: 2.5rem /* 40/16 */ 0 0;
}

.page-nav__link {
  box-shadow: none;
  color: #2f495e;
  display: inline-block;
  font-size: 1rem /* 16/16 */;
  line-height: 1.2;
  font-weight: 700;
  margin: 0 5px;
  padding: 5px;
  text-transform: uppercase;
  transition: color 0.12s ease-in-out;
}

.page-nav__link.nuxt-link-exact-active,
.page-nav__link.nuxt-link-exact-active:hover,
.page-nav__link:hover,
.page-nav__link:focus {
  color: #00c58e;
  text-decoration: none;
}

.page-nav__link::after {
  content: '_';
  display: inline-block;
  opacity: 0;
  transition: opacity 0.12s ease-in-out;
}

.page-nav__link.nuxt-link-exact-active::after,
.page-nav__link.nuxt-link-exact-active:hover::after,
.page-nav__link:hover::after,
.page-nav__link:focus::after {
  opacity: 1;
}
</style>
