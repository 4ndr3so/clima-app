import React from "react";
import ClimaExtraInfo from "./ClimaExtraInfo";
import TemperaturaClima from "./TemperaturaClima";
import PropTypes from 'prop-types'
import {
    CLOUD,
CLOUDY,
SUN,
WINDY,
RAIN, 
SNOW, 
} from "./../../../constants/weather";
import './styles.css';


const DataClima = ({data:{temperatura,estadoclima,humedad,viento}}) => {
  //  const {temperatura,estadoclima,humedad,viento}=data;

    return(
    <div className="wetherDatacont" >
        <TemperaturaClima temperatura={temperatura} estadoclima={estadoclima}></TemperaturaClima>
        <ClimaExtraInfo humedad={humedad} viento={viento}></ClimaExtraInfo>
    </div>)
};
DataClima.propTypes={
    data:PropTypes.shape({
        temperatura:PropTypes.number.isRequired,
        estadoclima:PropTypes.string.isRequired,
        humedad:PropTypes.number.isRequired,
        viento:PropTypes.string.isRequired
    })
}
export default DataClima;