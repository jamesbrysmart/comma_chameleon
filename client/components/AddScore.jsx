import React from 'react'

class AddScore extends React.Component {
      
    
  render() {
    return(
    <div>
      <h2> You nailed it! Please submit your name below to be added to our Top Scores! </h2>
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input type ='text' value={this.state.name} onChange={this.props.handleChange} />
        </label>
        <input type ='submit' value='Submit' />
      </form>
    </div>
    )
  }
}



{/* <form>
        <input type='text' />
      </form> */}

export default AddScore