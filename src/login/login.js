import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthAct } from '../Actions/AuthAct'
import './login.css'

const Login = (props) => {

  const [username, setUsername] = useState('') 
  const users = useSelector(state => state.GetAllUsers)

  const UsersList = Object.values(users).map((user) =>{
    return (
        <option value={user.id} key={Math.random()}>{user.id}</option>
    )
  })
  const {from} = props.location.state || { from: {pathname: '/'}}
  const dispatch = useDispatch()
  const LoginFN = () => {
    dispatch(AuthAct(username)) 
    setTimeout(() => {
      props.history.push(from)
    }, 1000);
  }
  
  return (
    <div className='login-container'>
    <select className='selectBoxLog' value={username} onChange={(e) => setUsername(e.target.value)}>
        <option value=''>Select Your Name</option>
        {UsersList}
      </select>

      <button className='signAncor' onClick={LoginFN} >Sign In</button>
    </div>
  )
}

export default Login
