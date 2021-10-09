import React from 'react'
import './question.css'
import { withRouter } from 'react-router'
import { useSelector } from 'react-redux'

const Question = (props) => {
  const users = useSelector(state => state.GetAllUsers)
  const AllQuestions = useSelector(state => state.GetQuestions )
  
  const QsOrdered = Object.values(props.QUESTIONS).sort((a,b)=>{
    return a.timestamp - b.timestamp
  }).reverse()

  const QuestionCards = QsOrdered.map((question) =>{
      return (
        <div className='question' key={question.id}>
          <div className='creator-QS'>Created by: {AllQuestions[question.id].author}</div>
          <div className='body-QS'>
            <div className='avatar_container'>
              <img className='avatar' alt='Avatar Img' src={users[AllQuestions[question.id].author].avatarURL} />
            </div>
            <div className='right-side'>
              <h3>Would You Rather...</h3>
              <div style={{fontSize:'13px'}}>
                {AllQuestions[question.id].optionOne.text}
                  <span style={{color:'red',fontWeight:'bold'}}>  VS  </span> 
                {AllQuestions[question.id].optionTwo.text}
              </div>
              <button className='view-Btn' onClick={() =>props.history.push(`/questions/:${question.id}`)}>View</button>
            </div>
          </div>
        </div>
      )
  })

  return (
    <div>
      {QuestionCards.length === 0 ? <h3 style={{marginTop:'20px', color:'white'}}>No Questions...</h3> : QuestionCards }
    </div>
  )
}
export default withRouter(Question)
