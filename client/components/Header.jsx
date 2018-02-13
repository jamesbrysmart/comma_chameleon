import React from 'react'

export default function Header(props){
  const style={
    color:`hsl(${props.currentScore+100}, 60%, 70%)`
  }
    return (
    <div className = 'header' style={style}>
      <div className = 'score'>
        <h2>Score: {props.currentScore} timer {props.timer}</h2>

      </div>
      <div className = 'title'>
        <h1>Comma Chameleon </h1>
      </div>
      <div className = 'image'>
        <img className = 'image' src='/images/chameleon.png' /> 
      </div> 
    </div>  
      
    )
  }