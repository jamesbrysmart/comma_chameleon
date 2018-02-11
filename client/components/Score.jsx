import React from 'react'

import {getScores, getLowestScore} from '../api'
import AddScore from './AddScore'

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topScore:false,
      topScores:[]
    }
    this.fetchScores = this.fetchScores.bind(this)
    this.renderScores= this.renderScores.bind(this)
  }


  fetchScores(){
    getScores(this.renderScores)
  }

  renderScores(scores){
    this.setState({topScores:scores})
  }



  componentWillMount(){
    this.fetchScores()
  }
  

  render() {
    return (
      <div>
      <h2>{this.props.score}</h2>
      <ul className = 'topScores'>
      {this.state.topScores.map(score => {
        return [
          <li>{score.scores}: {score.username}</li>
        ]
        })}
      </ul>


      {this.state.topScore && <AddScore />}
      
      <form>
        <input type='text' />
      </form>

      </div>
    )
  }
}



export default Score