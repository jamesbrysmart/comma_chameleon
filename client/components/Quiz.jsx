
import { CSSTransitionGroup } from 'react-transition-group'
import React from 'react'
import Questions from './Questions'
import Answers from './Answers'
import Score from './Score'

import {pickQuestion, getAnswers} from '../api'

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answerOptions: [],
      answer: '',
      correctAnswer:'',
      questionId: 0 
    }
    this.renderQuestion=this.renderQuestion.bind(this)
    this.renderAnswerOptions=this.renderAnswerOptions.bind(this)
    this.returnAnswer=this.returnAnswer.bind(this)
    this.checkIfCorrect=this.checkIfCorrect.bind(this)
    
  }

  renderQuestion(question, id) {
    this.setState({question: question, 
                   questionId: id, 
                  })
    getAnswers(this.renderAnswerOptions,id)
  }

  renderAnswerOptions(answerOptions, answer) {
    this.setState({answerOptions: answerOptions, 
                   correctAnswer: answer.answer})  

  //array of questions
    }
  
  checkIfCorrect(answer){
  if (this.state.correctAnswer == answer) {
    this.props.addToScore()
   } else {
    this.props.minusScore()
   }
    //console.log('picknewquestion')
    // pickQuestion(this.renderQuestion)
  }

  returnAnswer(pickedAnswer){
    this.setState({answerOptions: [], 
      answer: ''})
    this.checkIfCorrect(pickedAnswer)
    setTimeout(() => pickQuestion(this.renderQuestion),300)
    // console.log(answer)
    //  this.setState({checkedAnswer: answer})
     //settimer, then load next question

  }
  
   
  componentDidMount() {
    pickQuestion(this.renderQuestion)
  
  }

  render() {
    return (
      <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
        <div key={this.state.questionId}>
          <Questions question={this.state.question} id={this.state.questionId} />
          <Answers answerOptions={this.state.answerOptions} answer={this.state.answer} returnAnswer = {this.returnAnswer}/>
      </div>
      </CSSTransitionGroup>  
    )
  }
}

export default Quiz