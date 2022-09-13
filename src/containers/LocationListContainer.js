import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
//import { setSelectedCity,setWeather, getWeatherCity } from "./../actions";
import * as actions from "./../actions";
import { getWeatherCities , getCity} from "./../reducer";
import  LocationList  from "./../components/LocalizacionClima/LocationList";



class LocationListContainer extends Component {



    componentDidMount(){
      
        const {setWeather ,setSelectedCity ,cities  ,city} =this.props
        setWeather(cities);
        setSelectedCity(city);
        //this.props.setWeather(this.props.cities);
        //this.props.setCity(this.props.city)
    }

    handleSelectionLocation=city=>{
        console.log("handleSelectionLocation desde app "+city)

       // this.setState({city});
        //store.dispatch(setCity(city))
        this.props.setSelectedCity(city)
      }

    render() {
        //console.log(this.props.cities)
        return (
            
            <LocationList cities={this.props.citiesWeather} 
            onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity:PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
    city:PropTypes.string.isRequired,
};


const mapDispatchToPorpsActions = dispatch => bindActionCreators(actions, dispatch);
/*
const mapDispatchToPorpsActions=dispatch=>({
    setCity:value=>dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
  });
*/
  const mapStateToProps=state => ({
      citiesWeather:getWeatherCities(state),
      city:getCity(state)
    })

export default connect(mapStateToProps,mapDispatchToPorpsActions)(LocationListContainer);