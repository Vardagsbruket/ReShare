import { combineReducers,configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postSlice"

const reducer = combineReducers({
    posts : postReducer
})

export const store = configureStore({
    reducer: reducer,
});

