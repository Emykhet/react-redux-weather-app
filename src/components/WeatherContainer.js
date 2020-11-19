import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchWeatherAction } from "../actions/weatherActions"

const WeatherContainer = () => {
    const inputRef = React.useRef() // grabs value from input element
    const [city, setCity] = useState()
    const [time, setTime] = useState({})
    const [submitted, setSubmitted] = useState(false) // if submit button is activated

    const updateTime = ()=>{
        setInterval(() => { 
            const today = new Date()
            let hour = today.getHours()
            hour = ("0" + hour).slice(-2);
            let minutes = today.getMinutes()
            minutes = ("0" + minutes).slice(-2);
            setTime({
                hour: hour,
                minute: minutes
            }) }, 1000);
    }

// set dispatch
    const dispatch = useDispatch()

// set time on load
    useEffect(()=>{
        updateTime()
    }, [])

// get weather state 
    const weather = useSelector(state => state.weather)
    const {fetchedWeather, errorFetchingWeather, loading} = weather

// set user input as City
    const inputCityHandler = (e) =>{
        const value = e.target.value
        e.persist()
        setCity(value)
    }

// on submit dispatch city to weather action function imported form weatherActions.js
    const dispatchCityHandler = (e) => {
        e.preventDefault()
        dispatch(fetchWeatherAction(city))
        setSubmitted(true)
        inputRef.current.value = "" // clear input field after submit
    }
// round temperature to the nearest whole number
    const roundTemp = (temp) =>{
        return Math.round(temp);
    }

    return (
        <div className="weather-container">
            <div className="time-input">
                <form className="form" onSubmit={(e) => dispatchCityHandler(e)} className="search-display" action="">
                 <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
               <label htmlFor="city">
                <input
                onChange={(e) => inputCityHandler(e)}
                className="city-input"                
                type="text" 
                name="city" 
                id="city"
                ref={inputRef}
                placeholder="weather in your city"/> 
                </label>
            </form>
            <h2 className="time">{time.hour} : {time.minute}</h2>
            </div>
    { city && fetchedWeather && submitted ? (
    <div className="weather-display">
   
    <div className="temp-main-info">
    
        <div className="temp-location">
            <h2 className="temp-city">{fetchedWeather.city}</h2>
            <h2 className="temp-country">{fetchedWeather.country}</h2>
        </div> 
        <div className="temp-info">
        <img src={`http://openweathermap.org/img/wn/${fetchedWeather.icon}@2x.png`} alt="" className="temp-icon"/>
        <h1 className="temp">{roundTemp(fetchedWeather.temp)}° C</h1>
        </div>
        <div className="temp-high-low">
            <h4 className="temp-low">{roundTemp(fetchedWeather.temp_low)}° C</h4>
            <h4 className="temp-high">{roundTemp(fetchedWeather.temp_high)}° C</h4>
        </div>
        <p className="temp-condition">{fetchedWeather.description}</p>
    </div>
    
</div>
): errorFetchingWeather ? (
    <div className="weather-display">
        <div className="temp-location">    
            <h2 className="temp-city">{errorFetchingWeather}</h2>   
        </div>   
    </div>
):(
    <h2 className="time"></h2>
)}
    </div>
    )
}

export default WeatherContainer




