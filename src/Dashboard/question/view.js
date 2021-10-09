import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'
import ViewAnsweres from './viewResults'
import ViewToAnswer from './viewToAnswer'

const View = (props) => {
  const user = useSelector((state) => state.LoginReducer.user)
  const users = useSelector((state) => state.GetAllUsers)
  const qid = props.match.params.id.slice(1)

  const viewPage = () =>{
    if(users[user]){
      return Object.keys(users[user].answers).includes(qid)
    }
  }


  return (
    <div>
      {viewPage() ? <ViewAnsweres /> : <ViewToAnswer />}
    </div>
  )
}

export default withRouter(View)
