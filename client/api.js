import request from 'superagent'

const questionsUrl = 'http://localhost:3000/api/questions'

const answersUrl = 'http://localhost:3000/api/answers'

export function pickQuestion (callback) {
  request
    .get(questionsUrl)
    .then(items => { 
    let data = JSON.parse(items.text)
    let questionObj = pickRandom(data.questions)
    callback(questionObj.question, questionObj.id)
    })
  }

function pickRandom(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

function findCorrect(arr){
  return arr.find(data => data.isCorrect)
}

export function getAnswers(callback, id) {
  request
    .get(answersUrl)
    .then(items => {
      let data = JSON.parse(items.text)
      console.log(id)
    //  var newArr = data.answers.filter(answer, id => id == answer.q_id)
       var correctAnswer = findCorrect(newArr)
       callback(newArr, correctAnswer)     
  })
    
      //console.log(newArr)
    }
  //arr.filter(answers => id==arr.q_id)}

// export function updateScores(score) {
//   if ({pickedAnswer} == {Answer}) {
//     score += 5
//   } else
  
// }
