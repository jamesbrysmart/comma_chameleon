import request from 'superagent'

const questionsUrl = 'http://localhost:3001/api/questions'
const answersUrl = 'http://localhost:3001/api/answers'
const scoresUrl = 'http://localhost:3001/api/scores'

export function pickQuestion (callback) {
  request
    .get(questionsUrl)
    .then(items => { 
    let data = items.body
    let questionObj = pickRandom(data.questions)
    callback(questionObj.question, questionObj.id)
    })
  }

function pickRandom(arr){
  let randomIndex= Math.floor(Math.random()*arr.length)
  return arr[randomIndex]
}

function findCorrect(arr){
  return arr.find(data => data.isCorrect)
}

export function getAnswers(callback, id) {
  request
    .get(answersUrl)
    .then(items => {
      let data = items.body
      var newArr = data.answers.filter(answer => id == answer.q_id)
       var correctAnswer = findCorrect(newArr)
      //  console.log(newArr)
       callback(newArr, correctAnswer)     
  })
}

export function getScores(callback) {
  request
    .get(scoresUrl)
    .then(items => {
      let data=items.body
      let scoreList=data.scores.sort(function(a,b){
        return b.scores - a.scores
      })
      var topScores =[]
      for (var i=0; i<10; i++) {
        topScores.push(scoreList[i])
      }

      callback(topScores)

    })
}


// scoreList[0]
//   callback(lowestScore)

export function addScore(score, callback) {
  console.log(score)
  request
   .post(scoresUrl)
   .send(score)
   .end((err, res) => {
     callback(res)
  })
}  
  //arr.filter(answers => id==arr.q_id)}

// export function updateScores(score) {
//   if ({pickedAnswer} == {Answer}) {
//     score += 5
//   } else
  
// }
