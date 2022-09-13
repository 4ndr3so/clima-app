import React, { Component } from 'react';
//import { connect } from "react-redux";
//import  LocationList  from "./components/LocalizacionClima/LocationList";
import logo from './logo.svg';
import './App.css';
import {Grid,Col,Row} from 'react-flexbox-grid'
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from "./components/LocalizacionClima/ForecastExtended";
//import { setCity } from "./actions";
//import { store } from "./store";
//import PropTypes from "prop-types";
import  LocationListContainer  from "./containers/LocationListContainer";
import  ForecastExtendetContainer  from "./containers/ForecastExtendetContainer";



class App extends Component {
/*
  constructor(){
    super();
    this.state={city:null}
  }*/
/*
  handleSelectionLocation=city=>{
    console.log("handleSelectionLocation desde app "+city)
    this.setState({city})
    
    //store.dispatch(setCity(city))
    this.props.setCity(city)
  }*/
  cities=[
    'Bogota,col',
    'Buenos aires,ar',
    'Washington,us',
    'Ciudad de Mexico,mx',
    'Madrid,es',
    'Lima,pe'
  ]
  
  render(){ 
    //const {city}=this.state;
    return(
    <Grid>
      <Row>
        <AppBar position = "sticky">
          <Toolbar>
            <Typography variant="subtitle1" color='inherit'>
              APP CLima
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        {console.log(this.cities)
        }
        <LocationListContainer cities={this.cities} ></LocationListContainer>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
            
              <ForecastExtendetContainer ></ForecastExtendetContainer>
              
            </div>
          </Paper>
        </Col>
      </Row>
     
    </Grid>
  )};
}


export default App;
