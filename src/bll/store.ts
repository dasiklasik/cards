import { combineReducers, createStore } from "redux";
import {reducer} from "./reducer";

const mainReducer = combineReducers({
    reducer: reducer,
})


export type mainReducerType = ReturnType<typeof mainReducer>

export const store = createStore(mainReducer)
