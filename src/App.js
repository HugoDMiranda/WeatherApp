import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import WeatherInf from './components/weather-inf';

function App() {

  const [data , setDate] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1cdcfaf81455aeb5a0b50b26013f4875`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
         setDate(response.data)
      })
      setLocation('')
    }  
  }

  return (
    <div className="App">
      <div className='search'>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </div>
      {data.name !== undefined && 
        <div className='container'>
          <div>
            <div className='location'>
              {data.name}
            </div>
            <div className='weather'>
              <WeatherInf 
                    inf= {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null} 
              />
              <WeatherInf 
                  inf= {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt='icon'/> : null} 
              /> 
              <WeatherInf 
                    inf= {data.weather ? <h1>{data.weather[0].main}</h1> : null}  
              />
            </div>
          </div>
          
            <div className='extras'>
              <div>
              <WeatherInf 
                  infText='Feels Like'
                  inf={data.main ? <h1>{data.main.feels_like.toFixed()}°C</h1> : null}
                />   
              </div>
              <div>
                <WeatherInf 
                  infText='Humidity'
                  inf={data.main ? <h1>{data.main.humidity}%</h1> : null} 
                /> 
              </div>
              <div>
                <WeatherInf 
                  infText='Wind Speed'
                  inf={data.wind ? <h1>{data.wind.speed.toFixed()} MPH</h1> : null} 
                />  
              </div>
            </div>
        </div>
      }
    </div>
  );
}

export default App;
