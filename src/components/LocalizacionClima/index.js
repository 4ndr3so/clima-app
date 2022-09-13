import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import DataClima from "./DataClima";
import Locacion from "./Locacion";
import "./style.css";
import {
  CLOUD,
  CLOUDY,
  SUN,
  WINDY,
  RAIN,
  SNOW,
} from "./../../constants/weather";
import transClima from "./../../services/transClima";
//se usa la llaves por que al exportar no se utiliza la palabra defoult
import { api_weather } from "./../../constants/api_url";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";

const data = {
  temperatura: 9,
  estadoclima: SUN,
  humedad: 10,
  viento: "10 m7s",
};

const data2 = {
  temperatura: 20,
  estadoclima: WINDY,
  humedad: 12,
  viento: "16 m7s",
};

const LocalizacionClima = ({ onWeatherLocationClick, city, data }) => (
 
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Locacion city={city}></Locacion>
    {data ? (
      <DataClima data={data}></DataClima>
    ) : (
      <CircularProgress></CircularProgress>
    )}
  </div>

   /*
    constructor(props){
        super(props);
        const {city}= props;
        this.state={
          city,
          data:null  
        };
      //  console.log("constructor");
    }
    componentDidMount(){
       // console.log("componentDidMount");
        this.manejarClick();
    }
    componentDidUpdate(prevProps,prevState){
        //console.log("componentDidUpdate");    
    }
    componentWillMount(){
        //console.log("UNSAFE componentWillMount");
        //no usar
    }
    componentWillUpdate(nextProps, nextState){
        //console.log("UNSAFE componentWillUpdate");
    }
    manejarClick=()=>{
        const api_weather=getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve =>{
            //console.log(resolve)
            return resolve.json();
        }).then(data =>{
            //console.log("resultado manejarClick")
            const newWeather = transClima(data);
           // console.log(newWeather)
            this.setState({
                data:newWeather
            })
        })     
    }
    render=()=>{
        const {onWeatherLocationClick, city, data}=( this.props);
       // console.log(this.props)
       // console.log("render");

        return (
        */
  // )}
  //<button onClick={this.manejarClick} >Actualizar</button>
);

LocalizacionClima.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperatura: PropTypes.number.isRequired,
    estadoclima: PropTypes.string.isRequired,
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired,
  }),
};

export default LocalizacionClima;
