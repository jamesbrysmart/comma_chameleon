import request from 'superagent'

const questionsUrl = 'http://localhost:3000/api/80sQs'

const answersUrl = 'http://localhost:3000/api/80sAs'

export function pickQuestion (callback) {
  request
    .get(questionsUrl)
    .then(data => {
    var question = pickRandom(res.body.questions)
    var id = res.body.id
    callback(question, id)
    })
  }


pickRandom(arr){
  return arr(Math.floor(Math.random()*arr.length))

//in order for the below to work, need to change all q_answ_ids to same format
export function findAnswers(arr, id) {
  arr.filter(answers => id==arr.q_id)
}

// export function updateScores(score) {
//   if ({pickedAnswer} == {Answer}) {
//     score += 5
//   } else
  
// }
