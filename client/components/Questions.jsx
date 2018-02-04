import React from 'react'




class Questions extends React.Component{
  // const question = this.props.question
  // var answer = this.props.answer
  // need state to be able to turn off during commagame - or does it if state is in quiz?
  render() {
    return (
    // or this. props .question? how to know which to use?
    <h2 className ='Question'>{this.props.question}</h2>
    )
  }
}

export default Questions