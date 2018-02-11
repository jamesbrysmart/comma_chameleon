var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Server is listening on port', PORT)
})


// var server = require('./server')
// var PORT = process.env.PORT || 3000
// var knex = require('knex')
// var config = require('./../knexfile').development
// var db = knex(config)
// var app = server(db)

// app.listen(PORT, () => {
//   console.log('Listening on port', PORT)
// })

