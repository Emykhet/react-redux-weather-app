import {fetchWetherReducer} from "./weatherReducers"
import {combineReducers} from "redux"

const allReducers = combineReducers({
    wordList: wordListReducer,
    wordDetails: wordDetailsReducer,
    membershipList: membershipListReducer,
    membershipDetails: membershipDetailsReducer,
    cart: cartReducer,
})

export default allReducers