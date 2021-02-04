// initial state
const state = {
  loading: false,
};

// getters
const getters = {
  isLoading: state => state.loading,
};

// actions
const actions = {
  setIsLoading ({ commit }, payload) {
    commit('setIsLoading', payload);
  },
};

// mutations
const mutations = {
  setIsLoading (state, value) {
    state.loading = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
