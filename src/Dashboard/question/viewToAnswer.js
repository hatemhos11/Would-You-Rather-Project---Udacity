import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { AnswerQuestion } from '../../Actions/QuestionActs'

import SpinnerLoading from '../../SpinnerLoading'


class ViewToAnswer extends Component {
  state= {
    Answer: ''
  }

  handleAnswerQ = (event , qid, Answer) =>{
    event.preventDefault()
    if(this.state.Answer.trim() !== ''){
      this.props.dispatch(AnswerQuestion(qid, Answer))
      this.props.history.push('/')
    }
  }

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

      return (
        <div>
        { Object.keys(this.props.Questions).includes(qid) ? (
        <div className='question-reslut'>
          <div className='creator-QS'>Created by: {this.props.Questions[qid].author}</div>
          <div className='body-QS-result'>
            <div className='avatar_container'>
              <img className='avatar' alt='Avatar Img' src={this.props.users[Questions[qid].author].avatarURL} />
            </div>
            <div className='right-side'>
              <h3>Would You Rather...</h3>
              <form className='form' onSubmit={(e) => this.handleAnswerQ(e, qid, this.state.Answer)} >
                <label htmlFor='q1' >
                <input
                  type='radio'
                  id="q1" name='answer'
                  value='optionOne'
                  onClick={(e) => this.setState({Answer: e.target.value})}
                  />
                  <span className='label-content'>
                    {Questions[qid].optionOne.text}
                  </span>
                </label>

                <label htmlFor='q2' >
                <input 
                  type='radio'
                  id="q2" name='answer'
                  value='optionTwo'
                  onClick={(e) => this.setState({Answer: e.target.value})}
                />
                <span className='label-content'>
                  {Questions[qid].optionTwo.text}
                </span>
                </label>

                <input type='submit' value='save' />
              </form>
            </div>
        </div>
      </div>)
        :  <SpinnerLoading />}
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

export default compose(withRouter,connect(mapStateToProps))(ViewToAnswer);
