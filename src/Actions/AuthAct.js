import { getUsers} from "../Data/Api"

export const AuthAct = (id)=>{
  return async dispatch => {
    const res = await getUsers();
    let ids = Object.keys(res)
    let user = ids.filter(idd => idd === id)
    return dispatch({
        type: 'LOGIN',
        user
    })
  }
}

