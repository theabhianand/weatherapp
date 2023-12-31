import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
import {  useState } from "react";
import { getFormattedWeatherData } from "./WeatherService";

const getWheatherDetail = (query, setWheaterData)=>{
  const fetchWeatherData = async() => {
    const data = await getFormattedWeatherData(query);
    setWheaterData(data);
    console.log(data);
  };
  fetchWeatherData();

}
function App() {
  
  
  const [wheatherData, setWheaterData] = useState({
    country:"FR",
    description: "broken clouds",
    feels_like: 10.78,
    humidity: 80,
    iconURL: "https://openweathermap.org/img/wn/04d@2x.png",
    name: "Paris",
    pressure: 1007,
    speed: 5.14,
    temp: 11.49,
    temp_max: 12.43,
    temp_min: 10.56,
  })
  const [search_query, setSearch_query] = useState('');
  return (
    <div className="app" style={{backgroundImage: `url(${wheatherData.temp < 25 ? coldBg : hotBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input value={search_query} type="text" name="city" placeholder="Enter city..." onKeyDown={e=>{
              console.log(e);
              if(e.code === 'Enter'){
                getWheatherDetail(search_query, setWheaterData)
              }

            }} onChange={e=>{setSearch_query(e.target.value)}} />
            <button id='search' onClick={()=>{getWheatherDetail(search_query, setWheaterData)}}>Enter</button>
            {/* <button>°F</button> */}
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>{wheatherData.name}, {wheatherData.country}</h3>
              <img 
              src={wheatherData.iconURL} 
              alt="weatherIcon"
              />
              <h3>{wheatherData.description}</h3>
            </div>
            <div className="temperature">
            <h1>{wheatherData.temp} °C</h1>
            </div>
          </div>

          {/* bottom description */}
          <Descriptions data={wheatherData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
