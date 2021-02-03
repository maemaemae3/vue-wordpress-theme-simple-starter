// initial state
const state = {
  loading: false
};

// getters
const getters = {
  isLoading: state => state.loading,
};

// actions
const actions = {
  setLoading ({ commit }, payload) {
    commit('setIsLoading', payload);
  }
};

// mutations
const mutations = {
  setIsLoading (state, value) {
    state.loading = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
