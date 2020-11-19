import { 
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL, 
    FETCH_WEATHER_REQUEST
} from "../actions/actionTypes"

const initialState = {
    fetchedWeather: {
        country: "",
        city: "",
        temp: "",
        temp_low: "",
        temp_high: "",
        icon: "",
        description: "",
    }
}

export const fetchWetherReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_WEATHER_REQUEST:
            return {loading: true} 
        case FETCH_WEATHER_SUCCESS:
            return {loading: false, fetchedWeather: action.payload} 
        case FETCH_WEATHER_FAIL:
            return {loading: false, errorFetchingWeather: action.payload }
        default:
            return state
    }
}