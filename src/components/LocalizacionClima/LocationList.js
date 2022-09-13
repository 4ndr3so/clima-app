import React from 'react';
import LocalizacionClima from './../LocalizacionClima/index';
import PropTypes from "prop-types"
import './../styles.css'


const LocationList = ({cities,onSelectedLocation}) =>{
    const handleWeatherLocationClick=city =>{
        console.log("handleWeatherLocationClick en location list "+city)
        onSelectedLocation(city)
    }
    const strCom= cities=>(cities.map( city=>{
        
      
        console.log(city);
        return <LocalizacionClima 
        key={city.key} 
        city={city.name} 
        onWeatherLocationClick={()=>handleWeatherLocationClick(city.name)} 
        data={city.data}/>
    }))

    return (<div className='locationList'>

        {   
            console.log(cities)
        }
        {
             strCom(cities)
        }
    </div>)
}

// 
LocationList.propTypes={
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;