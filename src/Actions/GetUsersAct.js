import { getUsers } from "../Data/Api";

function userAct(AllUsers) {
  return {
    type: 'GET-USERS',
    AllUsers
  }
}


export function AllUsers() {
  return dispatch => {
    return getUsers().then(( AllUsers ) => {
      dispatch(userAct(AllUsers));
    });
  };
}
