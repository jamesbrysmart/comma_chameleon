import React from 'react'

class CommaGame extends React.Component {
  constructor(props) {
    super(props)
      this.state={
        score:this.props.score
      }
    
    
    
    
    }

    CommaPress(e) {
      if (e.keydown=='188')
      score++
    }



  
  
  render() {
    return (
      <div class = 'comma' data-key='188'>
        <kbd> , </kbd>
      </div>
    )
  }
  
  
  }




export default CommaGame