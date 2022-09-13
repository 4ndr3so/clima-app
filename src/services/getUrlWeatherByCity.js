import { api_key,base_url } from "./../constants/api_url";

const getUrlWeatherByCity= city =>{
    return `${base_url}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;