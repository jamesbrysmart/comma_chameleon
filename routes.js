var express = require('express')
var app = express()
var router = express.Router()

router.get('/', function (req,res) {
  startGame()
  res.send('hello')
})

router.get('/', function (req, res) {
  //
})


//join the two quiz tables so user can answer

//find right answer in cham quiz, then do something with it
db('cham_qs')
  .join('cham_answs', 'cham_qs.id', 'cham_answs.cham_q_id')
  .select('cham_answs', 'cham_qs', 'cham_answs.isCorrect' )
  .where('cham_answs.isCorrect', true)
  .first()
  .then ((data) => {
  res.render('game', data)
  })

module.exports = router