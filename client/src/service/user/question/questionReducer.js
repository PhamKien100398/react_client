import * as QT from './questionType'

const initState = {
    question: {}
}

const reducer = (state = initState, action_question) =>{
    switch (action_question.type) {

        case QT.REQUEST_EXAM_QUESTION:
            return {
                ...state
            }
        case QT.SUCCESS_QUESTION:
            return {
                question: action_question.payload
            };
            
        case QT.FALSE_QUESTION:
            return {
                question: undefined
            };
        default:
            return {
                ...state
            };
    }
}

export default reducer;

