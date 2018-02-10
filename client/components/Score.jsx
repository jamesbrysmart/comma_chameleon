import React from 'react'

import {getScores, getLowestScore}

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topScore:false,
      topScores:[]

    }
  }

  //could well be stateful as 



  ch

  render() {
    return (
      <div>
      <h2>{this.props.score}{this.state.topScores}</h2>

      {this.state.topScore && <AddScore />}
      
      <form>
        <input type='text' />
      </form>

      </div>
    )
  }
}



export default Score