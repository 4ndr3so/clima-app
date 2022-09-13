import React from "react";
import { PropTypes } from "prop-types";
import './style.css';

const Locacion= ({city}) =>{
    //console.log(props);
    //debugger;
    //const city=props.city;
    //destructurin
   // const {city}=props;
   
    return (<div className="locationCont">
                <h1>
                    {city}
                </h1>
            </div>)
}


Locacion.propTypes ={
    city:PropTypes.string.isRequired,
}
export default Locacion;