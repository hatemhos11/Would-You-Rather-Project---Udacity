import { _getUsers , _getQuestions, _saveQuestion , _saveQuestionAnswer} from "./_DATA";

export async function getUsers() {
  return await _getUsers()
}

export async function getQuestions() {
  return await _getQuestions()
}


export async function saveQuestion(question){
  return await _saveQuestion(question)
}
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
