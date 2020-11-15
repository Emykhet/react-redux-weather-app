import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
 }from "./actionTypes"

import axios from "axios"

// secured variables via .env
const APIkey = process.env.REACT_APP_WEATHER_API_KEY

// city from weather action set to API
export const fetchWeatherAction = (city) => async(dispatch) =>{
  try{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${APIkey}`)

    dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            temp_low: data.main.temp_min,
            temp_high: data.main.temp_max,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
        }
     })
  }catch (error) {
    dispatch({
      type: FETCH_WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
    
}