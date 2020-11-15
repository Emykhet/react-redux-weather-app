import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"

const WeatherContainer = () => {
    const [fetchedWeather, setFetchedWeather] = useState({})
    const [city, setCity] = useState("")
    const [time, setTime] = useState({})
    const tempRange = `low: ${fetchedWeather.temp_low} high: ${fetchedWeather.temp_high}`
    const [submitted, setSubmitted] = useState(false)

    useEffect(()=>{
        const today = new Date()
        setTime({
            month: today.getMonth(),
            date: today.getDate(),
            day: today.getDay(),
            hour: today.getHours(),
            minute: today.getMinutes()
        })
    }, [])

     const roundTemp = (temp) =>{
        return Math.round(temp);
    }

    const whatDay = (day) => {
        switch(day){
            case  0:
            day = "Sunday";
            break;

        }
    }

    // const toCelcius = (fTemp) =>{
    //     return Math.round((fTemp - 32) * 5 / 9);
    // }

        const getCityHandler = (e) =>{
            setCity(e.target.value)
        }
  
        const fetched = async (e) =>{
            e.preventDefault()
            // const city = e.target.value
            await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=59e169c017ee36053847ebe8d9a449ed`)
            .then(res => setFetchedWeather({
                country: res.data.sys.country,
                city: res.data.name,
                icon:  res.data.weather[0].icon,
                temp: res.data.main.temp,
                temp_low: res.data.main.temp_min,
                temp_high: res.data.main.temp_max,
                description: res.data.weather[0].description,
            }))
            .then(setSubmitted(true))
            // useRef to clear Input
            .catch(error => console.log(error))
        }
   
    return (
        <div className="weather-container">
            <form onSubmit={(e) => {fetched(e)}} className="search-display" action="">
                 <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
               <label htmlFor="city">
                <input 
                onChange={(e) => getCityHandler(e)}
                className="city-input"                
                type="text" 
                name="city" 
                id="city"
                placeholder="weather in your city"/> 
                </label>
                {/* <div className="notification">Type city to get weather</div> */}
            </form>
                {city  && submitted ? (
                    <div className="weather-display">
                    <div className="temp-location">
                        <h2 className="temp-city">{fetchedWeather.city}</h2>
                        <h2 className="temp-country">{fetchedWeather.country}</h2>
                    </div>  
                      <div className="temp-main-info">
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
                ): (
                    <div className="weather-display">
                        <div className="temp-location">
                        <h2 className="temp-city">{time.hour} : {time.minute}</h2>
                        </div>   
                    </div>
                )}
        </div>
    )
}

export default WeatherContainer
