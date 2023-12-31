import React from "react";
import "./descriptions.css";

// import { FaArrowDown } from "react-icons/fa";

const Descriptions = ({data}) => {
  return (
    <div className="section section__descriptions">
      <div className="card">
       <div className="description__card-icon">
        {/* <FaArrowDown /> */}
        <small>Temp Max</small>
       </div>
       <h3>{data.temp_max} °C</h3>
    </div>
    <div className="card">
       <div className="description__card-icon">
        {/* <FaArrowDown /> */}
        <small>Temp Min</small>
       </div>
       <h3>{data.temp_min} °C</h3>
    </div>
    <div className="card">
       <div className="description__card-icon">
        {/* <FaArrowDown /> */}
        <small>Pressure</small>
       </div>
       <h3>{data.pressure} atm</h3>
    </div>
    <div className="card">
       <div className="description__card-icon">
        {/* <FaArrowDown /> */}
        <small>Speed</small>
       </div>
       <h3>{data.speed} km/h</h3>
    </div>
    <div className="card">
       <div className="description__card-icon">
        <small>humidity</small>
       </div>
       <h3>{data.humidity} %</h3>
    </div>
    <div className="card">
       <div className="description__card-icon">
        {/* <FaArrowDown /> */}
        <small>feels like</small>
       </div>
       <h3>{data.feels_like} °C</h3>
    </div>
  </div>
  );
};

export default Descriptions
