import React, {useState} from 'react'
import './newQuestion.css'
import { AddQuestion } from "../Actions/QuestionActs"
import {useDispatch} from 'react-redux'
import {AllQuestions} from '../Actions/QuestionActs'
import {AllUsers} from '../Actions/GetUsersAct'



const NewQuestion = (props) => {
  const [First, setFirst] = useState('')
  const dispatch = useDispatch()
  const [Second, setSecond] = useState('')
  

  const handleAddQuestion = (First, Second) =>{
    if(First.trim() && Second.trim()){
      dispatch(AllUsers())
      dispatch(AllQuestions())
      dispatch(AddQuestion(First, Second))
      props.history.push('/')
    }
  }
  return (
    <div className='newQuestion'>
      
      <h2>WOULD YOU RATHER...?</h2>
      <div className='QsContainer'>
        <div className='or'>OR</div>
        <div className='ques ques1'>
          <h3>The First</h3>
          <input className='AddInp1' onChange={(e) => setFirst(e.target.value)} placeholder='First' type='text' />
        </div>
        <div className='ques ques2'>
          <h3>The Second</h3>
          <input className='AddInp2' onChange={(e) => setSecond(e.target.value)} placeholder='Second' type='text' />
        </div>
      </div>
      
      <button className='addQbtn' onClick={() => handleAddQuestion(First, Second) }>Add Question</button>
    </div>
  )
}

export default NewQuestion
