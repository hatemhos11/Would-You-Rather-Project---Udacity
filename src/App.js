import React, { useEffect } from 'react';
import './App.css';
import Private from './Private'
import Login from './login/login';
import Header from './Header'
import NewQuestion from './newQuestion/newQuestion'
import Dashboard from './Dashboard/Dashboard';
import LeaderBoard from './leaderBoard/LeaderBoard';
import Error404 from './404'
import {Redirect, Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import {AllUsers} from './Actions/GetUsersAct'
import {AllQuestions} from './Actions/QuestionActs'
import View from './Dashboard/question/view';


function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(AllUsers())
    dispatch(AllQuestions())
  }, [dispatch])
  
  return (
  <div className="App">

    <Header/>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Private exact path='/' component={Dashboard}/>
      <Private exact path='/add' component={NewQuestion} />
      <Private exact path='/questions/:id' component={View} />
      <Private exact path='/leaderboard' component={LeaderBoard}/>
      <Route exact component={Error404} />
      <Redirect to='/404'/>
    </Switch>

  </div>
  );
}

export default App;
