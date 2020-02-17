import { WordPress } from '~/services';

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) { // eslint-disable-line
    const { settings } = await WordPress.settings({ $axios });
    commit('settings/CHANGE_SITE_SETTINGS', settings);

    const { pages } = await WordPress.pages({ $axios, params: { parent: 0 } });
    commit('page/CHANGE_PAGE_LIST', pages);

    const pageLinks = pages.map(({ id, slug, title }) => ({ id, slug, title: title.rendered }));
    commit('page/CHANGE_PAGE_LINKS', pageLinks);
  },
};

export const getters = {};
