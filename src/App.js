import React from 'react';
import './App.css';

import { useState } from 'react';

const API_key="332ee4b0b4c58b9ca2c2654242d102a0";


function App() {
     const [city,setCity]=useState('');
     const [weather,setWeather]=useState({});

      const dateData=(d)=>{
          let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
          let date=d.getDate();
          let day=days[d.getDay()];
          let month=months[d.getMonth()];
          let year=d.getFullYear();
          return `${day} ${date} ${month} ${year}`;
      }
      const getWeather=(e)=>{
         if(e.key==="Enter"){
	
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`).then((res)=>res.json()).then(result=>{
setWeather(result);
setCity('');

  });           
          }
        }
        const handleChange=(e)=>{
          setCity(e.target.value)
        }
       

  
  
  return (
    <><body>
    <div>
    <div className='heading'><h1>WEATHER</h1></div>
    <div className="search-bar">
    
      
        <input className='search' type="text" name="city" placeholder='enter your city' onChange={handleChange} value={city} onKeyPress={getWeather}/>
     </div>
      <br></br><br></br>
        
        
        {((typeof weather.main)!="undefined")?(

          
          <div className='weather-info'>
        
        
          
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateData(new Date())}</div>
          
          <div className='temperature'>{Math.round(weather.main.temp)}°C </div>
       
          
          <div><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img></div>
          <div className="desc">{weather.weather[0].main}</div>
          <div>Wind Speed : {weather.wind.speed}m/s</div>
      
        
    </div>
        ):('')}
</div>        </body>
</>
   
     
  );
}

export default App;
