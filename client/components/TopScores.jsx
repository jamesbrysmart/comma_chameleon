import React from 'react'

function TopScores(props){
  return (
    <div class='topScores'>
      <h2> Top Scores </h2>
      {props.topScores.map(score => {
        return [
          <h4>{score.scores} - {score.username} </h4> 
        ]
        })} 
    </div>  
  )
}


export default TopScores