import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  const logged = useSelector((state) => state.LoginReducer.logged)
  const user = useSelector((state) => state.LoginReducer.user)
  const dispatch = useDispatch()

  const LogoutFN = () => {
    dispatch({ type: 'LOGOUT'})
    return logged
  }
  return (
    <header className='header'>
      <Link to='/' className='logo'><img alt='logo' src='/Logo.png'></img></Link>
      <nav className='NavHeader'>
        <NavLink exact to='/'>Dashboard</NavLink>
        <NavLink to='/leaderboard'>Leaderboard</NavLink>
        <NavLink to='/add'>New Question</NavLink>
      </nav>
        {user ? (<>
          <div className='authName'><strong>Signed in as:</strong> {user}</div>
          <Link className='logout' onClick={LogoutFN} to={LogoutFN ? '/login' : '/'} >
            <img alt='logout' src="https://img.icons8.com/fluency/48/000000/shutdown.png"/>
          </Link>
          </>
        ) : null}
    </header>
  )
}

export default Header
