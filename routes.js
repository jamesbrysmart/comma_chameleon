var express = require('express')
var app = express()
var router = express.Router()

// router.get('/', function (req,res) {
//   //startGame()
  
//   res.render('home')
// })

router.get('/quiz', function (req, res) {
  //
  // var newId=20002
  var db = req.app.get('db')

    db('80s_qs')
      .join('80s_answs', '80s_qs.id', '80s_answs.80s_q_id')
      .where('80s_q_id', 20002)
      .then((data) => {
        res.render('quiz', {question1: data[0], data})
      })

})

router.post('/quiz', function (req, res) {
  var answerChosen = req.body.answer
  var db = req.app.get('db')

  if (answerChosen.isCorrect) {
   score+=5
  } else score-=2

  loadnextquestion

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