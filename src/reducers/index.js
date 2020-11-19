import {fetchWetherReducer} from "./weatherReducers"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    weather: fetchWetherReducer
})

export default allReducers