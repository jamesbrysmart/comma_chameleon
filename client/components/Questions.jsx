import React from 'react'

const data =
{question:"why is the sky blue?"}


class Questions extends React.Component{
  // const question = this.props.question
  // var answer = this.props.answer
  // need state to be able to turn off during commagame
  render() {
    return (
    // or this. props .question? how to know which to use?
    <h2 className ='Question'> {data.question}</h2>
    )
  }
}

export default Questions