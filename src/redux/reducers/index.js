import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import ThemeReducer from "./ThemeReducer";
import RigReducer from "./RigsReducer";

export default combineReducers({
    auth: AuthReducer,
    theme: ThemeReducer,
    rigs: RigReducer
})
