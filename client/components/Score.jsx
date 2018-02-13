import React from 'react'

//import {getScores, getLowestScore} from '../api'
//import AddScore from './AddScore'

class Score extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     topScore:false,
  //     topScores:[]
  //   }
  //   this.fetchScores = this.fetchScores.bind(this)
  //   this.renderScores= this.renderScores.bind(this)
  // }


  // fetchScores(){
  //   getScores(this.renderScores)
  // }

  // renderScores(scores){
  //   this.setState({topScores:scores})
  // }



  // componentWillMount(){
  //   this.fetchScores()
  // }
  

  render() {
    return (
      <div className = 'topScores'> 
      <h2>Your final score: {this.props.score}</h2>
      <h3> Top Scores </h3>
      {this.props.topScores.map(score => {
        return [
          <h4>{score.scores} - {score.username} </h4> 
        ]
        })} 
      <button onClick = {this.props.startGame}> Play again! </button>
      </div>
    )
  }
}



export default Score