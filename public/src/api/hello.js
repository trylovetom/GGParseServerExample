import config from '../config'
import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = config.parseServerURI
instance.defaults.headers.common['X-Parse-Application-Id'] = config.appId
instance.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  sayHello: () => {
    return instance.post('/functions/hello')
  }
}
