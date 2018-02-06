import request from 'superagent'

const questionsUrl = 'http://localhost:3000/api/questions'

const answersUrl = 'http://localhost:3000/api/answers'

export function pickQuestion () {
  request
    .get(questionsUrl)
    .then(data => {
      var question = pickRandom(res.questions)
      var id = res.id
      this.setState({question, id})
    })
    }


export function pickRandom(arr){
  return arr(Math.floor(Math.random()*arr.length))
}

export function findAnswers(arr, id) {
  arr.filter()
}