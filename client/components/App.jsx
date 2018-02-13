import React from 'react'
import Quiz from './Quiz'
import CommaGame from './CommaGame'
import Score from './Score'
import { getScores } from '../api'

import {Helmet} from 'react-helmet'
import StartGame from './StartGame'
import Header from './Header'
import AudioPlayer from './AudioPlayer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      quizPlaying: false,
      commaGamePlaying: false,
      timerRunning: false,
      timer: 0,
      finalScore: 0,
      gameOver: false,
      isTopScore: false,
      topScores: [],
      beforeGame: true,
      songPlaying:false,
      showTopScores:false
      //commaListen: false
    }

    this.addToScore = this.addToScore.bind(this)
    // this.commaListen = this.commaListen.bind(this)
    this.minusScore = this.minusScore.bind(this)
    // this.checkGameStatus = this.checkGameStatus.bind(this)
    this.startGame = this.startGame.bind(this)
    this.playCommaGame = this.playCommaGame.bind(this)
    this.playQuiz = this.playQuiz.bind(this)
    this.addCommaScore = this.addCommaScore.bind(this)
    this.fetchScores = this.fetchScores.bind(this)
    this.renderScores = this.renderScores.bind(this)
    this.checkScore = this.checkScore.bind(this)
    this.checkIfTopScore = this.checkIfTopScore.bind(this)
    this.refreshScores = this.refreshScores.bind(this)
    
  }
  

  addToScore() {
    this.state.count += 10
  }

  minusScore() {
    this.state.count -= 3
  }

  addCommaScore() {
    this.state.count++
  }

  // checkGameStatus() {
  //   if (quizPlaying) {
  //     pickQuestion(this.renderQuestion)
  //   } else if (commaGamePlaying)
  //     return

  //}

  tickTimer() {
    let { timer } = this.state
    timer++
    this.setState({ timer })
  }


  startGame(/*e*/) {
    const timer = setInterval(() => this.tickTimer(), 1000)
      //if (e.keydown ==188) 
    this.setState({
      quizPlaying: true,
      timerRunning: true,
      beforeGame:false, 
      songPlaying:true,
      gameOver: false,
      count:0,
      timer:0
    })
    this.defineIntervals()
    setTimeout(() => clearInterval(timer), 240000)
  }

  playCommaGame() {
    this.setState({ quizPlaying: false, commaGamePlaying: true })
  }

  playQuiz() {
    this.setState({ quizPlaying: true, commaGamePlaying: false, commaListen: false }
    )
  }

  getResults() {
    this.setState({
      quizPlaying: false,
      commaGamePlaying: false,
      gameOver:true
    })
    this.checkScore()

  }

  fetchScores() {
    getScores(this.renderScores)
  }

  renderScores(scores) {
    this.setState({ topScores: scores })
  }

  checkScore() {
    getScores(this.checkIfTopScore)
  }

  checkIfTopScore(scores) {
    if (this.state.count>=scores[9].scores){
    this.setState({isTopScore:true})
  }
  }

  refreshScores(){
    
    this.setState({isTopScore:false})
    this.fetchScores()
  }

   
  componentWillMount() {
    this.fetchScores()
  }


  defineIntervals() {
    setTimeout(() => this.playCommaGame(), 5000)
    setTimeout(() => this.playQuiz(), 12000)
    setTimeout(() => this.playCommaGame(),19000)
    //  setTimeout(() => this.playQuiz(),129000)
    //  setTimeout(() => this.playCommaGame(),170000)
    //  setTimeout(() => this.getResults(),170000)
    setTimeout(() => this.getResults(), 25000)
    // console.log('hello')
    // this.playCommaGame()
  }


  render() {
    const style={
      backgroundColor:`hsl(${this.state.count+100}, 60%, 70%)`
    }
    
    return (
      <div className='app' style={style}>
        <Header currentScore={this.state.count} timer={this.state.timer}/> 
        <div className = 'container'>
          <div className='game'>
            {this.state.beforeGame && <StartGame startGame={this.startGame}/>}
            {this.state.songPlaying && <AudioPlayer />}
            {this.state.quizPlaying && <Quiz
              addToScore={this.addToScore} minusScore={this.minusScore} addCommaScore={this.addCommaScore} />}
            {this.state.commaGamePlaying && <CommaGame
              addCommaScore={this.addCommaScore} score={this.state.count}/>}
            {this.state.gameOver && <Score score={this.state.count} topScores={this.state.topScores} startGame={this.startGame} isTopScore = {this.state.isTopScore} refreshScores ={this.refreshScores}/>}
            
          </div> 
        </div>
      </div>
    )
  }
}



export default App