import objects from '../../api/objects'
import * as types from '../mutation-types'

// initial state
const state = {
  objectResponse: {},
  objectId: 'objectId'
}

// getters
const getters = {
  objectResponse: state => state.objectResponse,
  objectId: state => state.objectId
}

// actions
const actions = {
  creatingObjects: async ({ commit, state }, data) => {
    try {
      const response = await objects.creatingObjects(data)
      commit(types.CREATING_OBJECTS, response.data)
    } catch (err) {
      commit(types.CREATING_OBJECTS, err.response.data)
    }
  },
  retrievingObjects: async ({ commit, state }) => {
    try {
      const response = await objects.retrievingObjects(state.objectId)
      commit(types.RETRIEVEING_OBJECTS, response.data)
    } catch (err) {
      commit(types.RETRIEVEING_OBJECTS, err.response.data)
    }
  },
  updatingObjects: async ({ commit, state }, data) => {
    try {
      const response = await objects.updatingObjects(state.objectId, data)
      commit(types.UPDATING_OBJECTS, response.data)
    } catch (err) {
      commit(types.UPDATING_OBJECTS, err.response.data)
    }
  },
  deletingObjects: async ({ commit, state }, data) => {
    try {
      const response = await objects.deletingObjects(state.objectId, data)
      commit(types.DELETING_OBJECTS, response.data)
    } catch (err) {
      commit(types.DELETING_OBJECTS, err.response.data)
    }
  }
}

// mutations
const mutations = {
  [types.CREATING_OBJECTS]: (sate, response) => {
    state.objectResponse = response
    state.objectId = response.objectId
  },
  [types.RETRIEVEING_OBJECTS]: (state, response) => {
    state.objectResponse = response
  },
  [types.UPDATING_OBJECTS]: (state, response) => {
    state.objectResponse = response
  },
  [types.DELETING_OBJECTS]: (state, response) => {
    state.objectResponse = response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
