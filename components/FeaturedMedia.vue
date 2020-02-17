<template>
  <figure v-if="media.source_url" :class="`featured-media size-${size}`">
    <img
      :class="`featured-media-image`"
      :src="media.source_url"
      :alt="media.file"
      :width="media.width"
      :height="media.height"
      :loading="loading"
    />
  </figure>
</template>

<script>
export default {
  name: 'FeaturedMedia',
  props: {
    embedded: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    loading: {
      type: String,
      default: 'lazy', // auto, lazy, eager
    },
  },
  computed: {
    media() {
      if (!this.embedded['wp:featuredmedia']) return false;

      const { sizes } = this.embedded['wp:featuredmedia'][0].media_details;
      if (!(this.size in sizes)) return false;

      return sizes[this.size];
    },
  },
};
</script>

<style lang="scss">
.featured-media {
  margin: 0;
  padding: 0;

  &-image {
    display: block;
    height: auto;
    min-width: 100%;
  }
}
</style>
