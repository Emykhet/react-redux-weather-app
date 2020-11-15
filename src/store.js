import {createStore, applyMiddleware} from "redux"
// Thunk middleware is for writing action creators that return a function instead of an action
import thunk from "redux-thunk"
// ComposeWithDevTools- redux dev tool for debugging app's state changes.
import {composeWithDevTools} from "redux-devtools-extension" 
import allReducers from "./reducers"

// create middleware
const middleware = [thunk]

// create store
const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store