import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import cart from './cart'
import books from './books'
import electronics from './electronics'
import entertainment from './entertainment'

const paths: string[] = [
  'cart.items'
]

const dataStore = createPersistedState({
  paths
})

export default new Vuex.Store({
  modules: {
    cart,
    books,
    electronics,
    entertainment
  },
  plugins: [dataStore]
})
