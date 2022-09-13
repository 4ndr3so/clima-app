import React from "react";
import { PropTypes } from "prop-types";
import './styles.css';

const ClimaExtraInfo= ({humedad,viento}) =>(
    <div className="weatherExtraInfo">
        <span className="extraInfoText" >{`Humedad: ${humedad}%`}</span>
        
        <span className="extraInfoText" >{`Viento: ${viento} `}</span>
    </div>
);
ClimaExtraInfo.propTypes ={
    humedad:PropTypes.number.isRequired,
    viento:PropTypes.string.isRequired,
}
export default ClimaExtraInfo;