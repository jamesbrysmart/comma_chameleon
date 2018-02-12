import React from 'react'

function StartGame(props){
  return (
    <div>
      <h2> Welcome to Comma Chameleon! A celebration of 80s music, chameleons and grammar!</h2>
      <button onClick={props.startGame}> Start Game </button>
    </div>  
  )
}








export default StartGame