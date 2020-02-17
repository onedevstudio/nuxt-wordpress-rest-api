<template>
  <section class="blog">
    <Article v-for="(post, i) in posts" :key="i" :post="post" />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { WordPress } from '~/services';

export default {
  name: 'BlogPage',
  components: {
    Article: () => import('@/components/Article.vue'),
  },
  async fetch({ $axios, store }) {
    const { posts } = await WordPress.posts({ $axios, params: { per_page: 12 } });
    store.commit('post/CHANGE_POST_LIST', posts);
  },
  computed: {
    ...mapState({
      posts: ({ post }) => post.list,
    }),
  },
};
</script>

<style lang="scss"></style>
