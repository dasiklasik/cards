import { combineReducers, createStore, applyMiddleware } from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";

const mainReducer = combineReducers({
    reducer: reducer,
})


export type mainReducerType = ReturnType<typeof mainReducer>

export const store = createStore(mainReducer, applyMiddleware(thunk))
