import React, { Component } from "react";
import PropTypes from "prop-types";
import "../LocalizacionClima/style.css";
import ForecastItem from "../ForecastItem";
import { CLOUD, CLOUDY, SUN, WINDY, RAIN, SNOW } from "../../constants/weather";
import { api_key, base_url2 } from "../../constants/api_url";
import transformForescast from "./../../services/transformForescast";
/*
const days=[
        'lunes',
         'Martes',
         'Miercoles',
         'jueves',
         'Viernes',
         'sabado'
        ]

const data={
    temperatura:9,
    estadoclima: SUN,
    humedad:10,
    viento:'10 m7s'
}*/

const renderProgress=()=> {
  return "Cargando...";
}
const renderPodacstItemsDays =(forecastData)=> {
  return forecastData.map((forecast) => {
    return (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        wekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    );
  });
}

const ForecastExtended = ({ city, forecastData }) => (
  /*
    constructor( ){
        super();
        this.state={
            forecastData:null
        }
       // console.log(this.props);
    }

    upDateCity=city=>{
        const url_forescast =`${base_url2}?q=${city}&appid=${api_key}`;
       // console.log(url_forescast);
        fetch(url_forescast).then(data=>(data.json())).then(weather_data =>{ 
            //console.log(weather_data);
            const forecastData= transformForescast(weather_data);
           // console.log("desde didmoutn forecast");
           // console.log(forecastData);
            this.setState({forecastData});
        })
    }
    componentDidMount(){
            this.upDateCity(this.props.city)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city!== this.props.city){
            this.setState({forecastData:null})
            this.upDateCity(this.props.city)
        }
        
    }
*/

  // const city= this.props.city; es igual a
  //const {city}= this.props;
  //const {forecastData}=this.state;
  // console.log(forecastData);
  //console.log(this.props);

  <div className="forecast">
    <h2>Pronostico para {city}</h2>
    {forecastData ? renderPodacstItemsDays(forecastData) : renderProgress()}
  </div>
);
ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData:PropTypes.array,
};
export default ForecastExtended;
