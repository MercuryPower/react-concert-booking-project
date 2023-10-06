import {combineReducers} from "@reduxjs/toolkit";
import {currentCityReducer} from "./currentCityReducer";


export const rootReducer = combineReducers({city:currentCityReducer})

export type RootState = ReturnType<typeof rootReducer>