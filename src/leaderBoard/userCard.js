import React, { useEffect } from 'react'
import './LeaderBoard.css'
import { useSelector ,useDispatch } from 'react-redux'
import {AllQuestions} from '../Actions/QuestionActs'
import {AllUsers} from '../Actions/GetUsersAct'


const UserCard = () => {
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(AllUsers())
    dispatch(AllQuestions())
  }, [dispatch])
  
  const users = useSelector(state => state.GetAllUsers)
  
  const usersOrdered = Object.values(users).sort((a,b)=>{
    return (Object.keys(b.answers).length + b.questions.length ) - (Object.keys(a.answers).length + a.questions.length )
  })
  
  const Cards = usersOrdered.map((user, index) =>{
    return (
      <div className='card' key={user.id}>
        <div className='body-card'>
          <div className='avatar_container'>
            <img className='avatar' alt='here is img' src={user.avatarURL} />
          </div>

          <div className='center-side'>
            <h2 className='user-card-name'>{user.name}</h2>

            <div className='ans_Num'>
              <span>Answered Questions</span>
              <span>{Object.keys(user.answers).length}</span>
            </div>

            <div className='ans_Num'>
              <span>Created Questions</span>
              <span>{Object.keys(user.questions).length}</span>
            </div>
          </div>

          <div className='score-side'>
            <h3>Score</h3>
            <div className='score-num'>{Object.keys(user.answers).length + Object.keys(user.questions).length}</div>
          </div>
        </div>
        <div 
          className='rate' 
          style={ index === 0 ? {borderTop:'60px solid #b9f2ff'} :
                  index === 1 ? {borderTop: '60px solid #FFD700'} : 
                  index === 2 ? {borderTop: '60px solid #C0C0C0'} : {borderTop: '40px solid #ddd'}
                }>
          {index+1}
        </div>
      </div>
    )
  })

  return (
    <div>
      {Cards}
    </div>
  )
}

export default UserCard
