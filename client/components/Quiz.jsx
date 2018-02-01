import React from 'react'
import Questions from './Questions'
import Answers from './Answers'
import Score from './Score'

class Quiz extends React.Component{
  render() {
    return (
      <div className='container'>
        <Questions />
        <Answers />
      </div>  
    )
  }
}

export default Quiz