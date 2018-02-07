import React from 'react'
import Questions from './Questions'
import Answers from './Answers'
import Score from './Score'

import {pickQuestion} from '../api'

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      question: 'why is the sky blue?',
      answerOptions: ['a','b','c', 'd'],
      answer: 'a',
      answerChecked:'',
      score: 0,
      counter: 0,
      questionId: 0 
    }
    this.pickRandom=this.pickRandom.bind(this)
  }

  renderQuestion(question) {
    this.setState({question: question, 
                   questionId: id})
  }
  //array of questions
  
  }

  
  componentDidMount()
    pickQuestion(this.renderQuestion)


  render() {
    return (
      <div className='quiz'>
        <Questions question={this.state.question} />
        <Answers answerOptions={this.state.answerOptions} answer={this.state.answer}/>
      </div>  
    )
  }

  runQuiz() {
    // if (answerChecked==answer) score++
  }

}

// setNextQuestion() {
//   const counter = this.state.counter + 1;
//     const questionId = this.state.questionId + 1;
//     this.setState({
//       counter: counter,
//       questionId: questionId, //refer to quiz help
//     }
//       // getQuestion - 
// }
// }
// function pickRandomQ (arr) {
//return arr[Math.floor(Math.random) * arr.length]
// }

// function pickRandom80sQ(props){
//  let question = this.state.question
//   var randomQ = pickRandomQ(props)
//   this.setState(question)
// }
// takes array of questions, picks one randomly, prevents from being picked again
// need to make sure ID is pulled, to match with answers ID


// function findAnswers(arr){
// var answerOptions = this.state.answerOptions  
//var QId=this.state.question.id
//   var answerOptions = arr.filter(answer => answer.id ==QId)
// answerOptions.setState
// }

// function checkAnswer {
//  if checkedAnswer == answer
// return true

// }
 
// function correctAnswer(data) {
//   const answer = this.state.answer
//   if (data.isCorrect ? this.setState
// }


export default Quiz