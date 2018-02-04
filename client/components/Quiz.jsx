import React from 'react'
import Questions from './Questions'
import Answers from './Answers'
import Score from './Score'

class Quiz extends React.Component{
  constructor(props) {
  super(props);

   this.state = {
// playing state here or in app? also stops at various points in game
    question: '',
    answerOptions: [],
    answer: ''
   }

function pickRandom80sQ
// takes array of questions, picks one randomly, prevents from being picked again
// need to make sure ID is pulled, to match with answers ID



  render() {
    return (
      <div className='quiz'>
        <Questions question={this.props.question} />
        <ul className = "answerOptions">
        <Answers />
        </ul>
      </div>  
    )
  }
}

export default Quiz