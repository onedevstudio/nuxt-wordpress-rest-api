import { resolve } from 'path';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

require('dotenv').config({
  debug: !IS_PRODUCTION,
  path: resolve(__dirname, `.env${IS_PRODUCTION ? `.${process.env.NODE_ENV}` : ''}`),
});

const { BASE_URL, API_BASE_URL } = process.env;

export default {
  mode: 'universal',
  env: {
    API_BASE_URL,
    IS_PRODUCTION,
    BASE_URL,
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${BASE_URL}/favicon.ico` },
      { type: 'text/plain', rel: 'author', href: `${BASE_URL}/humans.txt` },
      { rel: 'index', href: `${BASE_URL}/` },
      { rel: 'dns-prefetch', href: `${BASE_URL}/` },
      { rel: 'dns-prefetch', href: `${API_BASE_URL}/` },
      { rel: 'preconnect', href: `${BASE_URL}/` },
      { rel: 'preconnect', href: `${API_BASE_URL}/` },
      { rel: 'prefetch', href: `${BASE_URL}/` },
      { rel: 'prefetch', href: `${API_BASE_URL}/` },
      { rel: 'prerender', href: `${BASE_URL}/` },
    ],
  },
  css: [],
  loading: {
    color: '#00c58e',
    height: '5px',
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/date-fns',
      {
        locales: ['pt-BR'],
        defaultLocale: 'pt-BR',
      },
    ],
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // '@nuxtjs/pwa',
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/typography',
    // '~/plugins/webfonts.client',
  ],
  axios: {
    // debug: !IS_PRODUCTION,
    // baseURL: API_BASE_URL,
    baseURL: `${API_BASE_URL}/wp-json/wp/v2`,
  },
  build: {
    extend(config, ctx) {
      // config.resolve.alias['@vue'] = 'vue/dist/vue.common';
      // config.resolve.alias.vue$ = 'vue/dist/vue.esm.js';
    },
  },
  generate: {
    routes() {
      // return axios.get(`${API_BASE_URL}${Config.api.projects}`).then(res => {
      //   return res.data.map(project => {
      //     return { route: '/' + project.slug, payload: project };
      //   });
      // });
    },
  },
};
