import {combineReducers} from "redux";
import {postsReducer} from "./postReduser";
import {appReducer} from "./appReduser";


export const rootReducer = combineReducers(
    {
        posts: postsReducer,
        loading: appReducer
    }
)