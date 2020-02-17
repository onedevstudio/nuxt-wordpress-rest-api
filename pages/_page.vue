<template>
  <article v-if="page" :class="pageClasses">
    <EntryHeader :title="page.title.rendered" />
    <FeaturedMedia :embedded="page._embedded" size="full" />
    <Render :html="`${page.content.rendered}`" class="entry-content" />
    <PostSeparator />
  </article>
</template>

<script>
import { mapState } from 'vuex';
import { WordPress } from '~/services';

export default {
  name: 'SinglePage',
  components: {
    Render: () => import('@/components/Render.vue'),
    EntryHeader: () => import('@/components/EntryHeader.vue'),
    PostSeparator: () => import('@/components/PostSeparator.vue'),
    FeaturedMedia: () => import('@/components/FeaturedMedia.vue'),
  },
  async fetch({ $axios, params, store }) {
    const slug = params.page;
    const { page } = await WordPress.singlePage({ $axios, params: { slug } });
    store.commit('page/CHANGE_PAGE_SINGLE', page);
  },
  computed: {
    ...mapState({
      page: ({ page }) => page.single,
    }),
    pageClasses() {
      if (!this.page) return;
      return `page-${this.page.id} page page-single type-${this.page.type} status-${this.page.status}`;
    },
  },
};
</script>

<style lang="scss">
.page-single {
  margin-bottom: 4rem;
}
</style>
