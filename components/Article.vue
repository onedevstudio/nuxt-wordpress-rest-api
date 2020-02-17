<template>
  <article :class="postClasses">
    <header class="entry-header container">
      <nuxt-link :to="`/blog/${post.slug}`">
        <FeaturedMedia :embedded="post._embedded" size="large" />
      </nuxt-link>
      <h1 class="entry-title">
        <nuxt-link :to="`/blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </h1>
      <ul class="post-meta">
        <li v-if="postAuthor" class="post-author">
          <AuthorGravatar :embedded="post._embedded" /><a href="#">{{ postAuthor.name }}</a>
        </li>
        <li class="post-date">{{ postDate }}</li>
        <li class="post-comment-link"><a href="#">Nenhum comentário</a></li>
      </ul>
    </header>
    <Render :html="`${post.content.rendered}`" class="entry-content" />
    <PostSeparator />
  </article>
</template>

<script>
export default {
  name: 'Article',
  components: {
    Render: () => import('@/components/Render.vue'),
    PostSeparator: () => import('@/components/PostSeparator.vue'),
    FeaturedMedia: () => import('@/components/FeaturedMedia.vue'),
    AuthorGravatar: () => import('@/components/AuthorGravatar.vue'),
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postClasses() {
      return `post-${this.post.id} post post-entry type-${this.post.type} status-${this.post.status} format-${this.post.format}`;
    },
    postAuthor() {
      if (!('author' in this.post._embedded)) return false;
      return this.post._embedded.author[0];
    },
    postDate() {
      const { $dateFns } = this.$root.context.app;
      return $dateFns.format(this.post.date, 'dd/MM/yyyy');
    },
  },
};
</script>

<style lang="scss">
.post.post-entry {
  padding: 4rem 0;

  .post-inner {
    padding-top: 8rem;
  }

  .entry-header {
    text-align: center;
  }

  .entry-title {
    font-size: 6.4rem;
    margin: 0;

    a {
      box-shadow: none;
      color: #2f495e;
      text-decoration: none;
      transition: color 0.12s ease-in-out;
      &:hover,
      &:focus {
        color: #108775;
      }
    }
  }

  .post-meta {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 1.2rem 0 3rem;
    padding: 0;
    color: #108775;

    li {
      align-items: center;
      display: flex;
      flex-shrink: 0;
      flex-wrap: nowrap;
      justify-content: center;
      letter-spacing: -0.016875em;
      margin: 1.4rem 0 0 3rem;
      max-width: calc(100% - 3rem);
    }

    a:hover,
    a:active,
    a:focus {
      text-decoration: none;
    }
  }

  .entry-content {
    font-size: 1.25rem /* 20/16 */;
  }
}
</style>
