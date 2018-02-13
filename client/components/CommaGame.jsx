import React from 'react'

class CommaGame extends React.Component {

  constructor(props) {
    super(props)
      
    this.handleCommaPress=this.handleCommaPress.bind(this)
  }


  handleCommaPress(e) {
  console.log(e.key)
  // console.log('nuj')
  //    if (e.keydown=='188') {
  //      console.log('done')
  //     this.props.addCommaScore()
  //   }
  }

  componentDidMount() {
    document.addEventListener('keydown', function(e){
      console.log(e)
      console.log('nuj')
      if (e.key==',') {
        console.log('done')
        this.props.addCommaScore()
      }
    });
  }


  
render() {
  const style={
    backgroundColor:`hsl(${this.props.score+100}, 60%, 70%)`
  }
    return (
      <div className='commaGame'>
         <button className='commaButton' style={style} onClick = {this.props.addCommaScore}> , </button>
        <h3> Now, press the comma button as fast as you can! </h3>
      </div>
    )
  }
  
  
}




export default CommaGame