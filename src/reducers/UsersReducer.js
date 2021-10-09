export const GetAllUsers = (state = {}, action) => {
  if(action.type === 'GET-USERS'){
    return {...state, ...action.AllUsers }
  }
  return state
}