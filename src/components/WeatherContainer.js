import React from 'react'

const weatherContainer = () => {
    return (
        <div className="weather-container">
            <h4>weather Container</h4>
            <form className="search-display" action="">
                <label htmlFor="city">
                <input 
                className="city-input"                
                type="text" 
                name="city" 
                id="city"/> 
                </label>

                <label htmlFor="country">
                <input 
                className="counry-input" 
                type="text" 
                name="city" 
                id="country"/> 
                </label>

                <button className="search-btn" type="submit">Search</button>
            </form>
            <div className="weather-display">
                <div className="temp-location">
                    <h2 className="temp-country">Country</h2>
                    <h1 className="temp-city">City</h1>
                </div>

                <div className="temp-icon">Icon</div>
                <h3 className="temp">Temperature</h3>

                <div className="temp-high-low">
                    <h5 className="temp-high">High</h5>
                    <h5 className="temp-low">Low</h5>
                </div>

                <p className="temp-condition">Weather Condition</p>
            </div>
        </div>
    )
}

export default weatherContainer
