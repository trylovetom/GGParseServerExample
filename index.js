var express = require('express')
var ParseServer = require('parse-server').ParseServer
var path = require('path')
var helmet = require('helmet')
var setAllowedOrigins = require('./middlewares/setAllowedOrigins')
var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI
var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/GGParseServerExample',
  cloud: process.env.CLOUD_CODE_MAIN || path.join(__dirname, '/cloud/main.js'),
  appId: process.env.APP_ID || 'GGParseServerExample',
  masterKey: process.env.MASTER_KEY || 'GGParseServerExampleMasterKey', // Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts', 'Comments'] // List of classes to support for query subscriptions
  }
})

var app = express()
app.use(helmet())
app.use(setAllowedOrigins())
// Serve static assets from the /public/dist folder
app.use('/', express.static(path.join(__dirname, '/public/dist')))
// Serve static assets from the /public/dist/static folder
app.use('/static', express.static(path.join(__dirname, '/public/dist/static')))

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse'
app.use(mountPath, api)

var port = process.env.PORT || 1337
var httpServer = require('http').createServer(app)
httpServer.listen(port, function () {
  console.log('The GG\'s Force Awakens On Port ' + port)
})

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer)
