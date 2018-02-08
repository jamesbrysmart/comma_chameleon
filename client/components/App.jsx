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
    // this.startGame = this.startGame.bind(this)
    // this.setTimer = this.setTimer.bind(this)
    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.addtoScore=this.addtoScore.bind(this)
    this.minusScore=this.minusScore.bind(this)
    this.checkQuizStatus=this.checkQuizStatus.bind(this)
  }
  
  handleScoreChange(score){
    this.setState({
      count:score
    })
  }
  
  addtoScore(){
   this.state.count+=5
  }

  minusScore(){
    this.state.count-=2
  }

  checkGameStatus(){
    if (quizPlaying) {
      pickQuestion(this.renderQuestion)
     } else if (commaGamePlaying)
     return 

    }

  }
  
  tickTimer() {
    let {timer} = this.state
    
    timer++
    // if (timer == 62) 
    this.setState({timer})
  }
  
  
  // startGame (/*e*/){ 
  //   const timer = setInterval(() => this.tickTimer(),1000)
  //   console.log(timer)
  //   //if (e.keydown ==188) 
  //   this.setState({
  //     quizPlaying: true,
  //     timerRunning: true,
  //   })
  // }
  
  
  
  
  
  
  
//  componentDidMount (){
//   startGame()
//  }
  
  // setTimer () when timer == 100 quiz playing turns to false, commagame to true
  
  render() {
    const backgroundColour = {
      backgroundColor: `hsl((${this.state.count+100}), 60% 70%)`
        }
    return (
      <div style={backgroundColour}>
        <h1>Comma Chameleon </h1>
        <h2>Score: {this.state.count}</h2>
        <h3>Timer: {(this.state.timer)}</h3>
        {this.state.quizPlaying && <Quiz 
        handleScoreChange ={this.handleScoreChange} />}
        {this.state.commaGamePlaying && <CommaGame
        handleScoreChange ={this.handleScoreChange} />}
      </div>
    )
  }
}
// function setTimer




// // when comma is pressed, start game and song


// function startCommaGame
// when timer hits a certain number, play commagame
  





export default App