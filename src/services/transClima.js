import  convert from 'convert-units'
import {
    CLOUD,
CLOUDY,
SUN,
WINDY,
RAIN, 
SNOW, 
THUNDER,
DRIZZLE
} from "./../constants/weather";

const getTemp = kelvin =>{
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWatherState= weather =>{
    const {id} = weather;
    if(id <300){
        return THUNDER;
    }else if (id <400) {
        return DRIZZLE;
    } if (id <600) {
        return RAIN;
    } if (id <700) {
        return SNOW;
    } if (id === 800) {
        return SUN;
    } else {
        return CLOUDY;
    }
    return SUN;
}

const transClima=data_clima =>{
    const{humidity,temp}=data_clima.main;
    const {speed}=data_clima.wind;
    const estadoclima=getWatherState(data_clima.weather[0]);
    //console.log(data_clima);
    const temperatura=getTemp(temp);
    const data= {
        humedad:humidity,
        temperatura,
        estadoclima,
        viento:`${speed} m/s`
    }
    //console.log(data);
    return data;
} 

export default transClima;