import React from 'react'

class CommaGame extends React.Component {
      
//this.handleCommaPress=this.handleCommaPress.bind(this)


handleCommaPress(e) {
  console.log(e.key)
  // console.log('nuj')
  //    if (e.keydown=='188') {
  //      console.log('done')
  //     this.props.addCommaScore()
  //   }
  }

 
 
  
render() {
    return (
      <div className='comma'
      onKeyDown={(e) => this.handleCommaPress(e)} >
         <button onClick = {this.props.addCommaScore}> , </button>
        <kbd> , </kbd>
      </div>
    )
  }
  
  
  }




export default CommaGame