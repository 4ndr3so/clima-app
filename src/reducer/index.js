import {combineReducers } from 'redux';
import { createSelector } from 'reselect'
import { cities, getForecasDataFromCities as _getForecasDataFromCities, getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city 
}) 
export const getCity= createSelector (state=> state.city, city => city)

export const getForecasDataFromCities =createSelector( state =>state.cities,getCity,_getForecasDataFromCities)

export const getWeatherCities= createSelector(state=>state.cities,_getWeatherCities);