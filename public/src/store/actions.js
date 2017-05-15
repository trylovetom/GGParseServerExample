import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

// import * as types from './mutation-types'

// export const addToCart = ({ commit }, product) => {
//   if (product.inventory > 0) {
//     commit(types.ADD_TO_CART, {
//       id: product.id
//     })
//   }
// }

// export const increment = ({ commit }) => commit('increment')
// export const decrement = ({ commit }) => commit('decrement')

// export const incrementIfOdd = ({ commit, state }) => {
//   if ((state.count + 1) % 2 === 0) {
//     commit('increment')
//   }
// }

// export const incrementAsync = ({ commit }) => {
//   setTimeout(() => {
//     commit('increment')
//   }, 1000)
// }
