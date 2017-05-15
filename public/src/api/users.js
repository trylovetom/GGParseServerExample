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
    console.log(querystring.stringify({
      username: username,
      password: password
    }))
    return instance.get('login?' + querystring.stringify({
      username: username,
      password: password
    }))
  },
  retrievingCurrentUser: (sessionToken) => {
    return instance.get('users/me', {
      headers: {
        'X-Parse-Session-Token': sessionToken
      }
    })
  }
}
