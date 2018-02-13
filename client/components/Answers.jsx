import React from 'react'


function Answers(props) {
  return (
    <div className='answers'>
      {props.answerOptions.length > 0 && <ul className="answerOptions">
        <form method='post'>
          {props.answerOptions.map(answerOption => {
            return [
              <li>
                <input name="answer" type="radio" className="answerButton" value={answerOption.answer} onClick={() => props.returnAnswer(answerOption.answer)} />
                <label>{answerOption.answer}</label></li>
            ]
          })}

        </form>
      </ul>}
    </div>
  )
}

export default Answers