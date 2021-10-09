import { combineReducers } from 'redux';
import {LoginReducer} from './LoginReducer';
import {GetQuestions} from './questionsReducer';
import {GetAllUsers} from './UsersReducer';

const reducer = combineReducers({
  LoginReducer,
  GetQuestions,
  GetAllUsers
})
export default reducer