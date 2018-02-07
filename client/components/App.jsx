import React from 'react'
import Quiz from './Quiz'
import CommaGame from './CommaGame'

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      quizPlaying: false,
      commaGamePlaying:false,
      timerRunning: false,
      timer: 0
    }
    this.startGame = this.startGame.bind(this)
    this.setTimer
  }

  startGame (e){ 
    if (e.keydown ==188) // do I need a prevent default to make sure stops happening?
    this.setState({
      quizPlaying: true,
      timerRunning: true
    })
  }

  // setTimer ()

  render() {
    return (
      <div>
        <h1>Comma Chameleon </h1>
        {this.state.quizPlaying && <Quiz />}
      </div>
    )
  }
}
// function setTimer




// // when comma is pressed, start game and song


// function startCommaGame
// when timer hits a certain number, play commagame
  





export default App