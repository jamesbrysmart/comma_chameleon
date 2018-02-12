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
      console.log('nuj')
      if (e.key==',') {
        console.log('done')
        this.props.addCommaScore()
      }
    });
  }


  
render() {
    return (
      <div className='comma'>
         <button onClick = {this.props.addCommaScore}> , </button>
        <kbd> , </kbd>
        <input type="text"/>
      </div>
    )
  }
  
  
}




export default CommaGame