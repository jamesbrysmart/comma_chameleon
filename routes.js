var express = require('express')
var app = express()
var router = express.Router()

router.get('/', function (req,res) {
  //startGame()
  
  res.render('home', data)
})

router.get('/', function (req, res) {
  //
})


//join the two quiz tables so user can answer

function findCorrectAnswer
// db.(select_cham_q)
//   .where(isCorrect == true)
//   .then ((data) => {
//   res.render('game', data)
//   })

//find specific question


function (select_cham_)
// db('cham_qs')
// .join('cham_answs', 'cham_qs.id', 'cham_answs.cham_q_id')
//   .select('cham_answs', 'cham_qs', 'cham_answs.isCorrect' )
//   .where('cham_answs.cham_q_id', 'cham_qs_id')

module.exports = router