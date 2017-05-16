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
  retrieveingUsers: (objectId) => {
    return instance.get('users/' + objectId)
  },
  retrieveingCurrentUser: (sessionToken) => {
    return instance.get('users/me', {
      headers: {
        'X-Parse-Session-Token': sessionToken
      }
    })
  }
}
