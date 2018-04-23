import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  strict: debug,
})
