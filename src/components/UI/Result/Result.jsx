import React from 'react'

export const Result = ({data, ...props}) => {
  return (
    <div className='result-wrapper'>
        <div className="top">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temperature">
                {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
        </div>

        {data.name !== undefined && 
            <div className="bottom">
                <div className="feels">
                    {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                    <p>Feels like</p>
                </div>
                <div className="humidity">
                    {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                    <p>Wind speed</p>
                </div>
            </div>
        }

    </div>
  )
}
