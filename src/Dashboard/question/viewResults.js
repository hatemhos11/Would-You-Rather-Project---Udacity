import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import SpinnerLoading from '../../SpinnerLoading'


class ViewAnsweres extends Component {

  componentDidUpdate(){
    const qid = this.props.match.params.id.slice(1)
    setTimeout(() => {
      if(Object.keys(this.props.Questions).length === 0 || !Object.keys(this.props.Questions).includes(qid)){
        this.props.history.push('/404')
      }
    }, 2000);
  }

  
  render(){
    const qid = this.props.match.params.id.slice(1)
    let Questions = this.props.Questions
    let users = this.props.users
    let AllVotes
    if(Object.keys(Questions).includes(qid)){
      AllVotes = Questions[qid].optionOne.votes.length + Questions[qid].optionTwo.votes.length
    }
    return (
    <div>
      { Object.keys(Questions).includes(qid) ? (
        <div className='question-reslut'>
          <div className='creator-QS'>Created by: {Questions[qid].author}</div>
          <div className='body-QS-result'>
            <div className='avatar_container'>
              <img className='avatar' alt='Avatar Img' src={users[Questions[qid].author].avatarURL} />
            </div>
            
            <div className='viewResult'>
              <div className='option' >
                <h3 className='option-text'>{Questions[qid].optionOne.text}</h3>
                <div className='vote-percentage-out'>
                  <div className='vote-percentage-in' style={{ width: Questions[qid].optionOne.votes.length /  AllVotes * 100 +'%'}}> 
                    {Math.floor(Questions[qid].optionOne.votes.length / AllVotes * 100)}%
                  </div>
                </div>
              </div>
        
              <div className='option'>
                <h3 className='option-text'>{Questions[qid].optionTwo.text}</h3>
                <div className='vote-percentage-out'>
                  <div className='vote-percentage-in' style={{ width: Questions[qid].optionTwo.votes.length /  AllVotes * 100 +'%'}}> 
                    {Math.floor(Questions[qid].optionTwo.votes.length / AllVotes * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      ) : <SpinnerLoading /> }

      </div>
    )
  }
}
function mapStateToProps({ LoginReducer, GetAllUsers, GetQuestions }) {
  return {
    user: LoginReducer.user,
    Questions: GetQuestions,
    users:GetAllUsers
  };
}

export default compose(withRouter,connect(mapStateToProps))(ViewAnsweres)
