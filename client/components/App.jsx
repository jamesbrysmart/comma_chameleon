import React from 'react'
import Quiz from './Quiz'
import CommaGame from './CommaGame'
import Score from './Score'

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      quizPlaying: false,
      commaGamePlaying:false,
      timerRunning: false,
      timer: 0,
      finalScore:0,
      gameOver: false
    }
    // this.startGame = this.startGame.bind(this)
    // this.setTimer = this.setTimer.bind(this)
    // this.handleScoreChange = this.handleScoreChange.bind(this)
    this.addToScore=this.addToScore.bind(this)
    this.minusScore=this.minusScore.bind(this)
    this.checkGameStatus=this.checkGameStatus.bind(this)
    this.startGame=this.startGame.bind(this)
    this.playCommaGame=this.playCommaGame.bind(this)
    this.playQuiz=this.playQuiz.bind(this)
    this.addCommaScore=this.addCommaScore.bind(this)
  }
  
  // handleScoreChange(score){
  //   this.setState({
  //     count:score
  //   })
  // }
  
  addToScore(){
   this.state.count+=5
  }

  minusScore(){
    this.state.count-=2
  }

  addCommaScore(){
    this.state.count++
  }

  checkGameStatus(){
    if (quizPlaying) {
      pickQuestion(this.renderQuestion)
     } else if (commaGamePlaying)
     return 

    }

  tickTimer() {
    let {timer} = this.state
    timer++
    this.setState({timer})
  }
  
  
  startGame (/*e*/){ 
    const timer = setInterval(() => this.tickTimer(),1000)
    console.log(timer)
    //if (e.keydown ==188) 
    this.setState({
      quizPlaying: true,
      timerRunning: true,
    })
    this.defineIntervals()
    setTimeout(() => clearInterval(timer),240000)
  }

  playCommaGame() {
    this.setState({quizPlaying:false, commaGamePlaying: true}) 
  }

  playQuiz() {
    this.setState({quizPlaying:true, commaGamePlaying:false}
    )
  }

  getResults() {
    this.setState({quizPlaying:false, 
      commaGamePlaying: false,
      gameOver: true})
 }
  
  defineIntervals() {
   setTimeout(() => this.playCommaGame(),5000)
   setTimeout(() => this.playQuiz(),10000)
  //  setTimeout(() => this.playCommaGame(),15000)
  //  setTimeout(() => this.playQuiz(),129000)
  //  setTimeout(() => this.playCommaGame(),170000)
  //  setTimeout(() => this.getResults(),170000)
   setTimeout(() => this.getResults(),12000)
     // console.log('hello')
     // this.playCommaGame()
     }
  
  
  
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
        <h3>Timer: {this.state.timer}</h3>
        <button onClick = {this.startGame}> Start Game </button>
        {this.state.quizPlaying && <Quiz 
        addToScore ={this.addToScore} minusScore={this.minusScore} addCommaScore ={this.addCommaScore} />}
        {this.state.commaGamePlaying && <CommaGame
        addCommaScore ={this.addCommaScore} />}
        {this.state.gameOver && <Score score={this.state.count} />}
      </div>
    )
  }
}
// function setTimer




// // when comma is pressed, start game and song


// function startCommaGame
// when timer hits a certain number, play commagame
  





export default App