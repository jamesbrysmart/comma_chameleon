import request from 'superagent'

const questionsUrl = 'http://localhost:3000/api/questions'
const answersUrl = 'http://localhost:3000/api/answers'
const scoresUrl = 'http://localhost:3000/api/scores'

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
       callback(newArr, correctAnswer)     
  })
}

export function getScores(callback) {
  request
    .get(scoresUrl)
    .then(items => {
      let data=items.body
      let scoreList=data.scores.sort()
      callback(scoreList)

    })
}

export function getLowestScore(arr) {
  request
    .get(scoresUrl)
    .then(items => {
      let data=items.body
      let scoreList=data.scores.sort()
// scoreList[0]
//   callback(lowestScore)

    })
  }

export function addScore(score) {
  request
  .post(scoresUrl)
  .send(score)
  .then(data => {
    const returnedScore = data.body
  })
}  
  //arr.filter(answers => id==arr.q_id)}

// export function updateScores(score) {
//   if ({pickedAnswer} == {Answer}) {
//     score += 5
//   } else
  
// }
