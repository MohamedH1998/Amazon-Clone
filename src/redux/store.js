import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"

const middleware = [thunk]

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store

// order of redux
// 1. actionTypes
// 2. action
// 3. store
// reducers
