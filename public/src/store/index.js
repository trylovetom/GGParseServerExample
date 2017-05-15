import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
import hello from './modules/hello'
import objects from './modules/objects'
import users from './modules/users'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    // cart,
    // products,
    hello,
    objects,
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

// Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

// export default new Vuex.Store({
//   actions,
//   getters,
//   modules: {
//     cart,
//     products
//   },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
// })

// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as getters from './getters'
// import * as actions from './actions'
// import * as mutations from './mutations'

// Vue.use(Vuex)

// const state = {
//   count: 0,
//   history: []
// }

// const store = new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })

// if (module.hot.accept) {
//   module.hot.accept([
//     './getters',
//     './actions',
//     './mutations'
//   ], () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   })
// }

// export default store

// // root state object.
// // each Vuex instance is just a single state tree.
// const state = {
//   count: 0
// }

// // mutations are operations that actually mutates the state.
// // each mutation handler gets the entire state tree as the
// // first argument, followed by additional payload arguments.
// // mutations must be synchronous and can be recorded by plugins
// // for debugging purposes.
// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   decrement (state) {
//     state.count--
//   }
// }

// // actions are functions that causes side and can involve
// // asynchronous operations.
// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }

// // getters are functions
// const getters = {
//   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }

// // A Vuex instance is created by combining the state, mutations, actions,
// // and getters.

// export default new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })
