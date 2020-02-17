export const state = () => ({
  list: [],
  single: {},
  links: [],
});

export const mutations = {
  CHANGE_PAGE_LIST(state, payload) {
    state.list = payload;
  },

  CHANGE_PAGE_SINGLE(state, payload) {
    state.single = payload;
  },

  CHANGE_PAGE_LINKS(state, payload) {
    state.links = payload;
  },
};

export const actions = {};
