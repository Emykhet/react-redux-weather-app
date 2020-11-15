import { FETCH_WEATHER } from "../actions/actionTypes"

export const fetchWetherReducer = (state = { fetchedWeather: [] }, action) =>{
    switch(action.type) {
        case FETCH_WEATHER:
            return {
                fetchedWeather: action.payload,
            }
            default:
                return state
    }
}