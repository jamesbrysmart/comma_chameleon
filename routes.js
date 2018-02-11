const express = require('express')
const app = express()
const router = express.Router()
const db = require('./db')

router.get('/answers', (req, res) => {
  db.getAnswers()
    .then(answers => {
      res.json({answers:answers})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
})
})

router.get('/questions', (req, res) => {
  db.getQuestions()
    .then(questions => {
      res.json({questions:questions})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
})
})

router.get('/scores', (req, res) => {
  db.getScores()
    .then(scores => {
      res.json({scores:scores})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })

module.exports = router