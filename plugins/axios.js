import { cacheAdapterEnhancer } from 'axios-extensions';
import LRUCache from 'lru-cache';
const ONE_HOUR = 1000 * 60 * 60;

const defaultCache = new LRUCache({ maxAge: ONE_HOUR });

export default function({ $axios, isDev, redirect }) {
  if (!isDev) {
    const defaults = $axios.defaults;

    defaults.adapter = cacheAdapterEnhancer(defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
      defaultCache,
    });
  }

  $axios.onRequest(config => {
    config.auth = {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    };

    if (isDev) {
      console.info('Request to:', config.url); // eslint-disable-line
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);

    if (code === 400) {
      redirect('/400');
    }
  });
}
