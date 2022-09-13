import { api_key, base_url2 } from "../constants/api_url";
import transformForescast from "./../services/transformForescast";
import transClima from "./../services/transClima";
//se usa la llaves por que al exportar no se utiliza la palabra defoult
import getUrlWeatherByCity from "./../services/getUrlWeatherByCity";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
//export const SET_WEATHER = "SET_WEATHER";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

export const setCity = (payload) => ({ type: SET_CITY, payload });

export const getWeatherCity = (payload) => ({
  type: GET_WEATHER_CITY,
  payload,
});
export const setWeatherCity = (payload) => ({
  type: SET_WEATHER_CITY,
  payload,
});

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
  return (dispatch,getState) => {
    const url_forescast = `${base_url2}?q=${payload}&appid=${api_key}`;
    //activar estado un indicador de busqueda
    dispatch(setCity(payload));
     console.log(payload);

    const state = getState();
    const date=state.cities[payload] && state.cities[payload].forecastDataDate;
    const now= new Date();
    console.log(date)
    if(date && (now-date)<1*60*1000 ){
      console.log("no fetch");
      return;
    }else{
      console.log("si fetch");
    }
    return fetch(url_forescast)
      .then((data) => data.json())
      .then((weather_data) => {
        //console.log(weather_data);
        const forecastData = transformForescast(weather_data);
        // console.log("desde didmoutn forecast");
        // console.log(forecastData);
        // this.setState({forecastData});
        //modificar el estado con el resultado de la promise
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);
      fetch(api_weather)
        .then((resolve) => {
          //console.log(resolve)
          return resolve.json();
        })
        .then((data_clima) => {
          //console.log("resultado manejarClick")
          const weather = transClima(data_clima);
          // console.log(newWeather)
          /*this.setState({
                data:newWeather
            })*/
          dispatch(setWeatherCity({ city, weather }));
        });
    });
  };
};
