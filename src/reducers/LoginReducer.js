const initState = {
  user: null
}

export const LoginReducer = (state = initState , action) => {
  if(action.type === 'LOGIN' && action.user.length > 0 ){
    return {...state, user: action.user }
  }else if(action.type === 'LOGOUT'){
    return {...state , user: null }
  }
  return state
}
