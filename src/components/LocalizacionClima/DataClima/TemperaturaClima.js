import React from "react";
import WeatherIcons from 'react-weathericons';
import PropTypes from "prop-types"
import {
CLOUD ,
CLOUDY,
SUN   ,
WINDY  ,
RAIN  , 
SNOW  , 
THUNDER,
DRIZZLE
} from "./../../../constants/weather"

const icons={
    sunny:"day-sunny",
    fog:"day-fog",
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",
    [THUNDER]:"day-thunderstorm",
    [DRIZZLE]:"day-showers"
};

const getWeatherIcon = estadoclima =>{
    const icon= icons[estadoclima] || "day-fog";

    const sizeIcon="4x"
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
}
const TemperaturaClima= ({temperatura,estadoclima}) =>(
    <div className="weatherTemperature">
        {
            getWeatherIcon(estadoclima)
        }
        <span className="temperature">{`${temperatura}`}</span> <span className="temperatureType">{`C°`}</span> 
        </div>
);

TemperaturaClima.propTypes={
    temperatura: PropTypes.number.isRequired,
    estadoclima:PropTypes.string.isRequired
}

export default TemperaturaClima;