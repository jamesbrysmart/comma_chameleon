import React from 'react'


function Answers(props){
  return (
            <div className = 'answers'>
            {props.answerOptions.length > 0 && <ul className = "answerOptions">
              <form method = 'post'>
              {props.answerOptions.map(answerOption => {
                return [
                  <li><label>{answerOption.answer}</label>,
                  <input name="answer" type="radio" className="answerButton" value={answerOption.answer} onClick={() => props.returnAnswer(answerOption.answer)}/></li>
                ]
              })}

              </form>
              </ul>}
            </div>
    )}
 
 export default Answers