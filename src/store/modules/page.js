import api from '../../api';

// initial state
const state = {
  all: [],
  loaded: false,
  page: null,
};

// getters
const getters = {
  loaded: state => state.loaded,
  allPages: state => state.all,
  page: state => id => {
    const field = typeof id === 'number' ? 'id' : 'slug';
    const page = state.all.filter(page => page[field] === id);
    return (page[0]) ? page[0] : null;
  },
  pageContent: state => id => {
    const field = typeof id === 'number' ? 'id' : 'slug';
    const page = state.all.filter(page => page[field] === id);

    return (page[0]) ? page[0].content.rendered : false;
  },
  recentPages: state => limit => {
    if (state.all.length < 1) {
      return null;
    }
    const all = [...state.all];
    return all.splice(0, Math.min(limit, state.all.length));
  },
};

// actions
const actions = {
  getAllPages ({ commit }) {
    api.getPages(pages => {
      commit('storePages', { pages });
      commit('pagesLoaded', true);
    });
  },
};

// mutations
const mutations = {
  storePages (state, { pages }) {
    state.all = pages;
  },
  pagesLoaded (state, value) {
    state.loaded = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
