import * as UT from './UsersType'

const initState = {
    users: ""
}

const reducer = (state = initState, action) =>{
    switch (action.type) {

        case UT.REQUEST_USERS:
            return {
                ...state
            }
        case UT.SUCCESS:
            return {
                users: action.payload
            };
            
        case UT.FAILURE:
            return {
                users: []
            };
        default:
            return {
                ...state
            };
    }
}

export default reducer;