<template>
  <header class="entry-header">
    <div class="entry-header-inner container">
      <h1 class="entry-title">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'EntryHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-header {
  background-color: #fff;
  padding: 8rem 0;
  margin: 0 0 4rem;

  .entry-title {
    font-size: 4.2rem;
    margin: 0;
  }
}
</style>
