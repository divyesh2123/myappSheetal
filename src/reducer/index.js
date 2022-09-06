import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userImageReducer from "./userImageReducer";
import userReducer from "./userReducer";

const rootReducer=combineReducers({

    counter: counterReducer,
    user: userReducer,
    userImage: userImageReducer

});

export default rootReducer;