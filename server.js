
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var router = require('./routes')

var app = express()

module.exports = function (db) {
  app.set('db', db)
  return app
}

// Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

//Routes
app.use(router)