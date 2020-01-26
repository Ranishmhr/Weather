import React from "react";
import './Weather.css'
import location from './location.png'
import temp from './temp.png'
import humidity from './humidity.png'
import condition from './condition.png'
import sunrise from './sunrise.png'
import wind from './wind.png'
import moment from "moment";
import WeekWeather from "../../container/Body/WeekWeather/WeekWeather";

const Weather = props => (
	<div className="weather-info">
		{

			props.city && props.country &&
			<p className="weather_location">
				<img src={location}/>
				<span className="weather__value"> {props.city}, {props.country}</span>
			</p>
		}
		{
	 	props.temperature && <p className="weather_temp">

			<img src={temp} />
			<span className="weather__temp">{ props.temperature }°C</span>

	 	</p>

	 }
	 <div className="addInfo">
	 { 	
	 	props.humidity && <p className="weather__key">
			<img src={humidity}  />
			Humidity:
	 		<span className="weather__value"> { props.humidity }</span>%
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key">
			<img src={condition}  />
			Conditions:
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	  { 	
	 	props.wind && <p className="weather__key">
			<img src={wind}  />
			Wind:
	 		<span className="weather__value"> {props.wind} m/s </span>
	 </p> 
	 }
		{
			props.sunrise && <p className="weather__key">
				<img src={sunrise}  />
				Sunrise:
				<span className="weather__value"> {moment.unix(props.sunrise).format("LT")} </span>
			</p>
		}
		{
			props.sunset && <p className="weather__key">
				<img src={sunrise}  />
				Sunset:
				<span className="weather__value"> { moment.unix(props.sunset).format("LT")} </span>
			</p>
		}
		{
			props.minTem && <p className="weather__key">
				<img src={temp}   />
				Min Temperature:
				<span className="weather__value"> { props.minTem}°C </span>
			</p>
		}
		{
			props.maxTem && <p className="weather__key">
				<img src={temp}/>
				Max Temperature:
				<span className="weather__value"> {props.maxTem}°C </span>
				<br/><br/>
			</p>
		}
       </div>
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	
    
	</div>
);

export default Weather;