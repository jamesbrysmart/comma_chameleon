import React from 'react'

class CommaGame extends React.Component {
      



  CommaPress() {
     // if (e.keydown=='188')
     console.log('hello')
      this.props.addCommaScore()
    }



  
  
render() {
    return (
      <div className = 'comma' data-key='188'>
         <button onClick = {this.CommaPress.bind(this)}> , </button>
        <kbd> , </kbd>
      </div>
    )
  }
  
  
  }




export default CommaGame