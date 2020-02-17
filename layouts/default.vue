<template>
  <div>
    <Header />
    <main id="site-content" role="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
  components: {
    Header: () => import('@/components/Header.vue'),
  },
};
</script>

<style lang="scss">
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #f5efe0;
  color: #2f495e;
  line-height: 1.5;
}

a {
  color: #00c58e;
  text-decoration: none;

  &:hover {
    color: #108775;
    text-decoration: none;
  }
}

p {
  line-height: 1.5;
}

img {
  margin: 0;
}

.container {
  margin: 0 auto;
  max-width: 58rem;
  padding: 0 1.071429rem;
}
</style>
