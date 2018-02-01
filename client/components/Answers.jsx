import React from 'react'
const info = [
  {text: "sdfasdfsdaf", isCorrect: false},
  {text: "bieshfiuwehbf", isCorrect: true},
  {text: "sdfasdfsdaf", isCorrect: false},
  {text: "bieshfiuwehbf", isCorrect: false}
]

class Answers extends React.Component{

  render() {
    return (
            <div className = 'answers'>
              <form method = 'post'>
              <label for ='A'>{info[0].text}</label>
              <input name="answer" type="radio" className="answerButton" value='A'/>
              <label for ='B'>{info[1].text}</label>
              <input name="answer" type="radio" className="answerButton" value='B'/>
              <label for ='C'>{info[2].text}</label>
              <input name="answer" type="radio" className="answerButton" value='C'/>
              <label for ='D'>{info[3].text}</label>
              <input name="answer" type="radio" className="answerButton" value='D'/>
              <input type="submit"/>
              </form>
            </div>
    )}}
 
 export default Answers