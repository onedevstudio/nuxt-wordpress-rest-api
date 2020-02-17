<template>
  <figure v-if="postAuthor" class="author-gravatar">
    <img
      :src="postAuthor.avatar_urls[size]"
      :alt="postAuthor.name"
      :width="`${size}px`"
      :height="`${size}px`"
      loading="lazy"
    />
  </figure>
</template>

<script>
export default {
  name: 'AuthorGravatar',
  props: {
    embedded: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: '96',
    },
  },
  computed: {
    postAuthor() {
      if (!('author' in this.embedded)) return false;
      return this.embedded.author[0];
    },
  },
};
</script>

<style lang="scss">
.author-gravatar {
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px rgba(17, 135, 117, 0.6);
  display: inline-block;
  margin: 0 0.625rem /* 10/16 */ 0 0;
  padding: 0.125rem /* 2/16 */;

  img {
    border-radius: 50%;
    display: block;
    height: auto;
    width: 36px;
  }
}
</style>
