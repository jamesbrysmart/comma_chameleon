import React from 'react'
import AddScore from './AddScore'
import TopScores from './TopScores'

//import {getScores, getLowestScore} from '../api'
//import AddScore from './AddScore'

class Score extends React.Component {

  render() {
    const style = {
      backgroundColor: `hsl(${this.props.score + 100}, 60%, 70%)`
    }
    return (
      <div className='finalScore'>
        <h1>Your final score: {this.props.score}</h1>
        {/* {this.props.topScore && TopScores /}  */}
        {this.props.isTopScore ? <AddScore score={this.props.score} refreshScores={this.props.refreshScores} /> : <TopScores topScores={this.props.topScores} />}
        <button style={style} className="playAgain" onClick={this.props.startGame}> Play again! </button>
      </div>
    )
  }
}



export default Score