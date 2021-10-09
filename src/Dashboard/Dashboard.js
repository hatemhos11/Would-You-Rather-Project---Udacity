import React,{ useState ,useEffect} from 'react'
import Answered from './Answered'
import UnAnswered from './UnAnswered'
import './dashboard.css'
import { useSelector,useDispatch } from 'react-redux'
import {AllQuestions as DispatchQuestions}  from '../Actions/QuestionActs'
import {AllUsers as DispatchUsers} from '../Actions/GetUsersAct'


const Dashboard = () => {

  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(DispatchUsers())
    dispatch(DispatchQuestions())
  }, [dispatch])
  

  // FROM STATE STORE
  const user = useSelector(state => state.LoginReducer.user)
  const AllQuestions = useSelector(state => state.GetQuestions )
  const users = useSelector(state => state.GetAllUsers)
  
  
  // filter answered Q
  let QUESTIONS_Ans = Object.keys(AllQuestions).filter((Q) => Object.keys(users[user].answers).includes(Q))
  let QUESTIONS_UnAns = Object.keys(AllQuestions).filter((Q) => !Object.keys(users[user].answers).includes(Q))


  // Toggle calss Name
  const [actClass , setActClass] = useState('unans')
  const [actComponent , setActCom] = useState(<UnAnswered />);
  const handleClick= (component, actClass)=> {
    setActCom(component);
    setActClass(actClass);
  }

  return (
    <div className='Dashboard'>
      <div 
        className={actClass === 'unans' ? 'active navAnswers' : 'navAnswers'}  
        onClick={ ()=> handleClick(<UnAnswered QUESTIONS={QUESTIONS_UnAns} />,'unans')}
      >
        Unanswered Questions  {QUESTIONS_UnAns.length}
      </div>
      <div  
        className={actClass === 'ans' ? 'active navAnswers' : 'navAnswers'}  
        onClick={ ()=> handleClick(<Answered QUESTIONS={QUESTIONS_Ans}/>, 'ans')}
      >
          Answered Questions  {QUESTIONS_Ans.length}
      </div>
      {actComponent}
    </div>
  )
}

export default Dashboard