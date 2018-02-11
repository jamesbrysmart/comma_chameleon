const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAnswers,
  getQuestions,
  getScores
}

function getAnswers (testDb) {
  const db = testDb || connection
  return db('answers').select()
}

function getQuestions (testDb) {
  const db = testDb || connection
  return db('questions').select()
}

function getScores (testDb) {
  const db = testDb || connection
  return db('scores').select()
}

