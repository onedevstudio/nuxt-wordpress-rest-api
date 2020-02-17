class WordPressApi {
  constructor() {
    this.apiBase = ``;
    this.defaultParams = { _embed: '' };

    // this.apiBase = `/wp-json/wp/v2`;
    // $axios = this.$root.context.$axios;
  }

  settings({ $axios, params = {} }) {
    return $axios
      .get(`${this.apiBase}/settings`, { params })
      .then(json => json.data)
      .then(settings => ({ settings }))
      .catch(error => ({ error }));
  }

  pages({ $axios, params = {} }) {
    params = { ...this.defaultParams, ...params };

    return $axios
      .get(`${this.apiBase}/pages`, { params })
      .then(json => json.data)
      .then(pages => ({ pages }))
      .catch(error => ({ error }));
  }

  singlePage({ $axios, params = {} }) {
    return this.pages({ $axios, params })
      .then(({ pages }) => ({ page: pages[0] }))
      .catch(error => ({ error }));
  }

  posts({ $axios, params = {} }) {
    params = { ...this.defaultParams, ...{ page: 1, per_page: 5 }, ...params };

    return $axios
      .get(`${this.apiBase}/posts`, { params })
      .then(json => json.data)
      .then(posts => ({ posts }))
      .catch(error => ({ error }));
  }

  singlePost({ $axios, params = {} }) {
    return this.posts({ $axios, params })
      .then(({ posts }) => ({ post: posts[0] }))
      .catch(error => ({ error }));
  }

  categories({ $axios, params = {} }) {
    return $axios
      .get(`${this.apiBase}/categories`, { params })
      .then(json => json.data)
      .then(categories => ({ categories }))
      .catch(error => ({ error }));
  }

  tags({ $axios, params = {} }) {
    return $axios
      .get(`${this.apiBase}/tags`, { params })
      .then(json => json.data)
      .then(tags => ({ tags }))
      .catch(error => ({ error }));
  }
}

export default new WordPressApi();
