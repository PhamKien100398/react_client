import * as AT from './AuthType'
import axios from 'axios'


export const authenticateUser = (username, password) =>{
    const information = {
        username: username,
        password: password
    }

    return async dispatch =>{
        dispatch(loginRequest());
       await axios.post("http://localhost:8082/api/auth/signin", information)
        .then(res =>{
            let token = res.data.accessToken;
            localStorage.setItem("jwtToken", token);
            dispatch(success(true, res.data));
        })
        .catch(error =>{
            dispatch(failure())
        });
    }
}

export const updatePassword = (password, token) =>{
    const up = {
        password : password,
        token : token
    }
    return dispatch =>{
        dispatch(update());
        axios.post("http://localhost:8082/api/auth/password-reset", up)
        .then(res =>{
            dispatch(success(true));
        })
        .catch(error => {
            dispatch(failure())
        })
    }
}

export const setMail = (email) =>{
    const em = {
        email : email
    }
    return dispatch =>{
        dispatch(sendMail());
        axios.post("http://localhost:8082/api/auth/password-reset-request", em)
        .then(res => {
            dispatch(success(true))
        })
        .catch(error =>{
            dispatch(failure())
        })
    }
}

const sendMail = () =>{
    return {
        type: AT.SEND_MAIL
    }
}

const update = () =>{
    return {
        type: AT.UPDATE_PASSWORD
    }
}

const loginRequest = () =>{
    return {
        type: AT.LOGIN_REQUEST
    }
}

export const logoutUser = ()=>{
    const user = [];
    return dispatch => {
        dispatch(logoutRequest());
        localStorage.removeItem("jwtToken");
        dispatch(success(false, user));
    }
}

const logoutRequest = () =>{
    return {
        type: AT.LOGOUT_REQUEST
    }
}

const success = (isLogIned, user) =>{
    return {
        type: AT.SUCCESS,
        payload: {
            isLogIned: isLogIned,
            user: user
        }

    }
}

const failure = () =>{
    return {
        type: AT.FAILURE,
        payload: {
            isLogIned: false,
            user: []
        }
    }
}