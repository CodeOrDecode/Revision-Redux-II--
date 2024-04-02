import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { todoreducer } from "./Todo/todoreducer";
import { otherreducer } from "./Others/otherreducer";
import { applyMiddleware } from "redux";
import { middlewaredepen } from "../middleware/middleware";
// import { logger } from "redux-logger"

let rootreducer = combineReducers({
    todo: todoreducer,
    other: otherreducer
})

export const store = legacy_createStore(rootreducer,applyMiddleware(logger));