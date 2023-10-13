import { combineReducers } from "redux";
import posts from './posts';
import notices from "./notices";
import auth from "./auth";

export default combineReducers({
    posts,
    notices,
    auth,
})