import config from '../config'
import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = config.parseServerURI + '/classes/GameScore/'
instance.defaults.headers.common['X-Parse-Application-Id'] = config.appId
instance.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  creatingObjects: (data) => {
    return instance.post('', data)
  },
  retrieveingObjects: (objectId) => {
    return instance.get(objectId)
  },
  updatingObjects: (objectId, data) => {
    return instance.put(objectId, data)
  },
  deletingObjects: (objectId) => {
    return instance.delete(objectId)
  }
}
