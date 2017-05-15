import hello from '../../api/hello'
import * as types from '../mutation-types'

// initial state
const state = {
  response: 'Say What??'
}

// getters
const getters = {
  sayHelloResponse: state => state.response
}

// actions
const actions = {
  sayHello: async ({ commit, sate }) => {
    try {
      const response = await hello.sayHello()
      commit(types.SAY_HELLO, response.data)
    } catch (err) {
      commit(types.SAY_HELLO, err.response.data)
    }
  }
}

// mutations
const mutations = {
  [types.SAY_HELLO]: (sate, response) => {
    state.response = response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
