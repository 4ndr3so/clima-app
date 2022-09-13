import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import ForecastExtended from "./../components/LocalizacionClima/ForecastExtended";
import { getForecasDataFromCities,getCity } from "./../reducer";


class ForecastExtendetContainer extends Component {
    render() {
        const {city, forecastData}= this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        );
    }
}

ForecastExtendetContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
};
const mapStateToProps=(state)=>({ city:getCity(state),forecastData:getForecasDataFromCities(state)});
/*
const mapStateToProps= state=>({
    city:state.city
})*/

// es igual a const mapStateToProps=({city})=({city});
export default connect(mapStateToProps,null)(ForecastExtendetContainer);