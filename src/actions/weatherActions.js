import {FETCH_WEATHER }from "./actionTypes"

let data;

export const fetchWeatherAction = () => (dispatch) =>{
    dispatch({
        type: FETCH_WEATHER,
        payload: data
     })
    
}