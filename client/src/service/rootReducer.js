import {combineReducers} from 'redux'
import authReducer from './user/auth/AuthReducer'
import questtionReducer from './user/question/questionReducer'
import resultExamReducer from './user/examResult/ResultReducer'
import userReducer from './admin/users/UsersReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    question: questtionReducer,
    examResult: resultExamReducer,
    users: userReducer
});

export default rootReducer;