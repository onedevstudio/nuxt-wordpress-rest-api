export const state = () => ({
  list: [],
  single: {},
});

export const mutations = {
  CHANGE_POST_LIST(state, payload) {
    state.list = payload;
  },

  CHANGE_POST_SINGLE(state, payload) {
    state.single = payload;
  },
};

export const actions = {};
