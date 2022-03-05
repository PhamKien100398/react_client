import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer"
import thunk from "redux-thunk";
import authToken from "./utils/authToken";

const store = createStore(rootReducer, applyMiddleware(thunk));

if(localStorage.jwtToken){
    authToken(localStorage.jwtToken);
}

export default store;