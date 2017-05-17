import config from '../config'
import axios from 'axios'
import querystring from 'querystring'

const instance = axios.create()

instance.defaults.baseURL = config.parseServerURI + '/'
instance.defaults.headers.common['X-Parse-Application-Id'] = config.appId

export default {
  signingUp: (data) => {
    return instance.post('users', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  loggingIn: (username, password) => {
    return instance.get('login?' + querystring.stringify({
      username: username,
      password: password
    }))
  },
  retrievingUsers: (objectId) => {
    return instance.get('users/' + objectId)
  },
  retrievingCurrentUser: (sessionToken) => {
    return instance.get('users/me', {
      headers: {
        'X-Parse-Session-Token': sessionToken
      }
    })
  },
  updatingUsers: (objectId, sessionToken, data) => {
    return instance.put('users/' + objectId, data, {
      headers: {
        'X-Parse-Session-Token': sessionToken,
        'Content-Type': 'application/json'
      }
    })
  }
}
