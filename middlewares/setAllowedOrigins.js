module.exports = (options) => {
  return (req, res, next) => {
    const allowedOrigins = [
      'http://127.0.0.1:8080', // for dev
      'http://localhost:8080'
    ]
    const origin = req.headers.origin

    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Parse-Application-Id, X-Parse-Session-Token')
    res.header('Access-Control-Max-Age', '2592000') // 30 days(60 * 60 * 24 * 30 = 2592000)
    res.header('Access-Control-Allow-Credentials', true)
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200) // return cors
    }
    return next()
  }
}
