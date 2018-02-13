import React from 'react'

function StartGame(props){
  return (
    <div className='startgamebox'>
      <h2> Welcome to Comma Chameleon! A celebration of 80s music, chameleons and grammar!</h2>
      <button className='startButton' onClick={props.startGame}> Start Game </button>
      <h4> Pick the answer you think is right during the verses, and press comma as fast as you can during the chorus - but take your time in the quiz! A correct answer is worth 10 points, and an incorrect answer loses you 3! </h4>  
    </div>  
  )
}








export default StartGame