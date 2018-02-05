import React from 'react'
const info = [
  {text: "sdfasdfsdaf", isCorrect: false},
  {text: "bieshfiuwehbf", isCorrect: true},
  {text: "sdfasdfsdaf", isCorrect: false},
  {text: "bieshfiuwehbf", isCorrect: false}
]

function Answers(props){

    return (
            <div className = 'answers'>
            <ul className = "answerOptions">
              <form method = 'post'>
              <label for ='A'>{props.answerOptions[0]}</label>
              <input name="answer" type="radio" className="answerButton" value={props.answerOptions[0]}/>
              <label for ='B'>{props.answerOptions[1]}</label>
              <input name="answer" type="radio" className="answerButton" value={props.answerOptions[1]}/>
              <label for ='C'>{props.answerOptions[2]}</label>
              <input name="answer" type="radio" className="answerButton" value={props.answerOptions[2]}/>
              <label for ='D'>{props.answerOptions[3]}</label>
              <input name="answer" type="radio" className="answerButton" value={props.answerOptions[3]}/>
              <input type="submit"/>
              </form>
              </ul>
            </div>
    )}
 
 export default Answers