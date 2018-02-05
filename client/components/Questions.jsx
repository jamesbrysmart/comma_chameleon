import React from 'react'

function Questions(props){
  // const question = this.props.question
  // var answer = this.props.answer
  // need state to be able to turn off during commagame - or does it if state is in quiz?
    return (
    // or this. props .question? how to know which to use?
    <h2 className ='Question'>{props.question}</h2>
    )
  }


export default Questions