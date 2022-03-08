import axios from 'axios'
import * as RT from './ResultType'

export const getExamResult = (examId)=>{

    return async dispatch =>{
        const token = localStorage.getItem("jwtToken")
        const AuthStr = 'Bearer ' + token;
        dispatch(request_result_exam());
        await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/"+examId+"/result", {
            headers : {
                'Authorization': AuthStr 
            }
        })
        .then((res)=>{
            dispatch(success_result_exam(res.data));
        })
        .catch((error) =>{
            dispatch(failse_result_exam());
        })
    }
}

const request_result_exam = () =>{
    return {
        type : RT.REQUEST_EXAM_RESULT
    }
}

const success_result_exam = (examResult) =>{
    return {
        type: RT.SUCCESS_EXAM_RESULT,
        payload: examResult
    };
}

const failse_result_exam = () =>{
    return {
        type: RT.FALSE_EXAM_RESULT,
        payload: []
    };
}