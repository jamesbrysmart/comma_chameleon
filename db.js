const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  get80sQs,
  get80sAs
}

function get80sAs (testDb) {
  const db = testDb || connection
  return db('80s_answs').select()
}

function get80sQs (testDb) {
  const db = testDb || connection
  return db('80s_qs').select()
}
