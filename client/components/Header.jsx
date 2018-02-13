import React from 'react'

export default function Header(props){
    return (
    <div className = 'header'>
      <div className = 'title'>
        <h1>Comma Chameleon </h1>
      </div>
      <div className = 'score'>
        <h2>Score: {props.currentScore}</h2>
      </div>
      <div className = 'image'>
        <img src='/images/chameleon.png' /> 
      </div> 
    </div>  
      
    )
  }