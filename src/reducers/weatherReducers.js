import { 
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL 
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
        case FETCH_WEATHER_SUCCESS:
            return state = {...state, fetchedWeather: action.payload} 
            case FETCH_WEATHER_FAIL:
                return { errorFetchingWeather: action.payload }
            default:
                return state
    }
}