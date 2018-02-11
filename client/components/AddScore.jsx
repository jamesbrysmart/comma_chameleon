import React from 'react'
import {addScore} from '../api'

class AddScore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      score: this.props.score
    }
    this.addNewScore = this.addNewScore.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }
  addNewScore(event) {
    event.preventDefault()
    addScore(this.state, this.props.refreshScores)
  }

  handleChange(event) {
    this.setState({name: event.target.value });
  }


  render() {
    return (
      <div>
        <h2> You nailed it! Please submit your name below to be added to our Top Scores! </h2>
        <form onSubmit={this.addNewScore}>
          <label>
            Name:
          <input type='text' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}



{/* <form>
        <input type='text' />
      </form> */}

export default AddScore