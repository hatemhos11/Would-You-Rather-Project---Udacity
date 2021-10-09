export const GetQuestions = (state = {} , action) => {
  if(action.type === 'GET-QUESTIONS'){
    return {...state, ...action.AllQuestions }
  }else if( action.type === 'ADD'){
    return {...state , [action.question.id]: action.question}
  }else if(action.type === 'ANSWER'){
    return {
      ...state,
      [action.qid]: {
        ...state[action.qid],
        [action.answer]: {
          ...state[action.qid][action.answer],
          votes: state[action.qid][action.answer].votes.concat([
            action.authedUser
          ])
        }
      }
    };
  }
  return state
}



