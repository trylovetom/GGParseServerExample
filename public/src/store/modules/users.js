import users from '../../api/users'
import * as types from '../mutation-types'

// initial state
const state = {
  userResponse: {},
  userObjectId: 'objectId',
  currentUser: {},
  sessionToken: ''
}

// getters
const getters = {
  userResponse: state => state.userResponse,
  userObjectId: state => state.userObjectId,
  currentUser: state => state.currentUser,
  sessionToken: state => state.sessionToken
}

// actions
const actions = {
  signingUp: async ({ commit, state }, data) => {
    try {
      const response = await users.signingUp(data)
      commit(types.SIGNING_UP_USER, response.data)
    } catch (err) {
      commit(types.SIGNING_UP_USER, err.response.data)
    }
  },
  loggingIn: async ({ commit, state }, data) => {
    try {
      const response = await users.loggingIn(data.username, data.password)
      commit(types.LOGGING_IN_USER, response.data)
    } catch (err) {
      commit(types.LOGGING_IN_USER, err.response.data)
    }
  },
  retrievingCurrentUser: async ({ commit, state }, data) => {
    try {
      const response = await users.retrievingCurrentUser(state.sessionToken)
      commit(types.RETRIEVEING_CURRENT_USER, response.data)
    } catch (err) {
      commit(types.RETRIEVEING_CURRENT_USER, err.response.data)
    }
  }
}

// mutations
const mutations = {
  [types.SIGNING_UP_USER]: (sate, response) => {
    state.userResponse = response
    state.userObjectId = response.objectId
    state.sessionToken = response.sessionToken
  },
  [types.LOGGING_IN_USER]: (state, response) => {
    state.userResponse = response
    state.userObjectId = response.objectId
    state.sessionToken = response.sessionToken
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
