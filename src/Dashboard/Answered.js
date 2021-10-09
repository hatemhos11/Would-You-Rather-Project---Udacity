import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SpinnerLoading from '../SpinnerLoading'
import Question from './question/question'

const Answered = (props) => {
  // FROM STATE STORE
  const user = useSelector(state => state.LoginReducer.user)
  const AllQuestions = useSelector(state => state.GetQuestions )
  const users = useSelector(state => state.GetAllUsers)
  

  

  // filter answered Q
  const QUESTIONS = Object.values(AllQuestions).filter((Q) => Object.keys(users[user].answers).includes(Q.id))


  return (
    <div>
      {Object.keys(users).length === 0 ? (<SpinnerLoading />) : (<Question QUESTIONS={QUESTIONS} /> ) }
    </div>
  )
}


export default withRouter(Answered)
