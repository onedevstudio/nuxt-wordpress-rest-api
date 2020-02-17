export const state = () => ({
  siteSettings: {},
});

export const mutations = {
  CHANGE_SITE_SETTINGS(state, payload) {
    state.siteSettings = payload;
  },
};
