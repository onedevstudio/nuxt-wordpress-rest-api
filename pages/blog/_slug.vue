<template>
  <article v-if="post" :class="postClasses">
    <EntryHeader :title="post.title.rendered" />
    <FeaturedMedia :embedded="post._embedded" size="full" />
    <Render :html="`${post.content.rendered}`" class="entry-content" />
    <PostSeparator />
  </article>
</template>

<script>
import { mapState } from 'vuex';
import { WordPress } from '~/services';

export default {
  name: 'BlogSingle',
  components: {
    Render: () => import('@/components/Render.vue'),
    EntryHeader: () => import('@/components/EntryHeader.vue'),
    PostSeparator: () => import('@/components/PostSeparator.vue'),
    FeaturedMedia: () => import('@/components/FeaturedMedia.vue'),
  },
  async fetch({ $axios, params, store }) {
    const { slug } = params;
    const { post } = await WordPress.singlePost({ $axios, params: { slug } });
    store.commit('post/CHANGE_POST_SINGLE', post);
  },
  computed: {
    ...mapState({
      post: ({ post }) => post.single,
    }),
    postClasses() {
      if (!this.post) return;
      return `post-${this.post.id} post post-single type-${this.post.type} status-${this.post.status} format-${this.post.format}`;
    },
  },
};
</script>

<style lang="scss"></style>
