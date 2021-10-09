import { getQuestions, saveQuestion , saveQuestionAnswer  } from "../Data/Api"


// Get All Questions from APIs
const QuestionAct = (AllQuestions) => {
  return{
    type: 'GET-QUESTIONS',
    AllQuestions
  }
}
export function AllQuestions() {
  return dispatch => {
    return getQuestions().then(AllQuestions =>{
      dispatch(QuestionAct(AllQuestions))
    })
  }
}


// Answer Question
export const AnswerQuestionAct = (authedUser, qid, answer) => {
  return {
    type: 'ANSWER',
    authedUser,
    qid,
    answer
  }
}

export function AnswerQuestion(qid, answer){
  return (dispatch, getState) => {
    const authedUser = getState().LoginReducer.user

    dispatch(AnswerQuestionAct( authedUser, qid, answer ))
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    });
  }
}



// Add Questoins
export const AddQuestionAct = (question) =>{
  return {
    type: 'ADD',
    question
  }
}

export function AddQuestion(optionOneText, optionTwoText) {
  return async (dispatch, getState) => {
    const author = getState().LoginReducer.user

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then( question =>{
      dispatch(AddQuestionAct(question)
      )
    })
  }
}
