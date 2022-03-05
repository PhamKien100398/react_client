import * as RT from './ResultType'

const initState = {
    examResult: ""
}

const reducer = (state = initState, exam_result) =>{
    switch (exam_result.type) {

        case RT.REQUEST_EXAM_RESULT:
            return {
                ...state
            }
        case RT.SUCCESS_EXAM_RESULT:
            return {
                examResult: exam_result.payload
            };
            
        case RT.FALSE_EXAM_RESULT:
            return {
                examResult: []
            };
        default:
            return {
                ...state
            };
    }
}

export default reducer;

