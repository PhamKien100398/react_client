import axios from 'axios'
import * as UT from './UsersType'

export const getUsers = ()=>{

    return async dispatch =>{
        const token = localStorage.getItem("jwtToken")
        const AuthStr = 'Bearer ' + token;
        dispatch(request_users());
        await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/users", {
            headers : {
                'Authorization': AuthStr 
            }
        })
        .then((res)=>{
            dispatch(success(res.data));
        })
        .catch((error) =>{
            dispatch(failure());
        })
    }
}


const request_users = () =>{
    return {
        type : UT.REQUEST_USERS
    }
}

const success = (users) =>{
    return {
        type : UT.SUCCESS,
        payload: {
            users: users
        }
    }
}

const failure = () =>{
    return {
        type : UT.FAILURE,
        payload: {
            users: []
        }
    }
}