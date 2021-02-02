import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import states from './modules/states'
import post from './modules/post'
import page from './modules/page'
import category from './modules/category'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    states,
    post,
    page,
    category
  },
  strict: debug,
})
