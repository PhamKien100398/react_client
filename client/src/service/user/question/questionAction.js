import * as QT from './questionType'
import axios from 'axios'

export const getExamQuestion = (id)=>{

    return async dispatch =>{
        const token = localStorage.getItem("jwtToken")
        const AuthStr = 'Bearer ' + token;
        dispatch(request_exam_question());
        await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/"+id+"/questions", {
            headers : {
                'Authorization': AuthStr 
            }
        })
        .then((res)=>{
            dispatch(success_question(res.data));
        })
        .catch((error) =>{
            dispatch(failse_question());
        })
    }
}

const request_exam_question = () =>{
    return {
        type : QT.REQUEST_EXAM_QUESTION
    }
}

const success_question = (user) =>{
    return {
        type: QT.SUCCESS_QUESTION,
        payload: user
    };
}

const failse_question = () =>{
    return {
        type: QT.FALSE_QUESTION,
        payload: []
    };
}
