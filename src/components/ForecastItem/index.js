import React, { Component } from 'react';
import PropTypes from "prop-types";
import DataClima from "../LocalizacionClima/DataClima";
import {
    CLOUD,
CLOUDY,
SUN,
WINDY,
RAIN, 
SNOW, 
} from "./../../constants/weather";


const data={
    temperatura:9,
    estadoclima: SUN,
    humedad:10,
    viento:'10 m7s'
}

const ForescastItem=({wekDay,hour,data})=>{
return( <div>
        <div>Item {`wekDay  ${wekDay} Hora:${hour}`} </div>
        <div><DataClima data={data}></DataClima></div>
        </div>

        )
}

ForescastItem.propTypes={
    wekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    data:PropTypes.shape({
        temperatura:PropTypes.number.isRequired,
        estadoclima:PropTypes.string.isRequired,
        humedad:PropTypes.number.isRequired,
        viento:PropTypes.string.isRequired
    })
}
export default ForescastItem;
