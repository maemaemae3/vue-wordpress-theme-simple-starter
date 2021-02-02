import api from '../../api'

// initial state
const state = {
  all: [],
  loaded: false
}

// getters
const getters = {
  loaded: state => state.loaded,
  allCategories: state => state.all,
}

// actions
const actions = {
  getAllCategories ({ commit }) {
    api.getCategories(categories => {
      commit('storeCategories', { categories })
      commit('categoriesLoaded', true);
    })
  }
}

// mutations
const mutations = {
  storeCategories (state, { categories }) {
    state.all = categories
  },
  categoriesLoaded (state, value) {
    state.loaded = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
