import * as AT from './AuthType'

const initState = {
    isLogg : ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case AT.LOGIN_REQUEST:
            return {
                ...state
            };
        
        case AT.LOGOUT_REQUEST:
            return {
                ...state
            };

        case AT.SEND_MAIL:
            return {
                ...state
            };
            
        case AT.UPDATE_PASSWORD:
            return {
                ...state
            };

        case AT.SUCCESS: 
            return {
                isLogg: action.payload
            };

        case AT.FAILURE:
            return {
                isLogg: action.payload
            };
        default:
            return state;
    }
}

export default reducer;