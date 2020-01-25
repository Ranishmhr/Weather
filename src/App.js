import React from "react";

import Titles from "./components/Title/Titles";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";


const API_KEY = "dd7f759d261762ebbb8cb130af247f30";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind:undefined,
    sunrise:undefined,
    sunset:undefined,
     minTem:undefined,
    maxTem:undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      if(city===data.name){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind:data.wind.speed  ,
        sunrise:data.sys.sunrise,
        sunset:data.sys.sunset,
        minTem:data.main.temp_min,
        maxTem:data.main.temp_max,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind:undefined,
        sunrise:undefined,
        sunset:undefined,
        minTem:undefined,
        maxTem:undefined,
        error: "Search Not Found "
      });
    }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind:undefined,
        sunrise:undefined,
        sunset:undefined,
        minTem:undefined,
        maxTem:undefined,
        error: "Please enter the valid data."
      });
    }
  }
  changeTemperature() {
    if (this.state.description === 'few clouds') {
      return 'few_clouds'
    }
    if(this.state.description === 'clear sky'){
      return 'clear_sky'
    }
    if(this.state.description === 'fog'){
      return 'fog'
    }
    if(this.state.description === 'mist'){
      return 'mist'
    }

        if(this.state.description === 'overcast clouds') {
          return 'overcast'
        }
    if(this.state.description === 'haze') {
      return 'mist'
    }
    if(this.state.description === 'broken clouds'|| this.state.description==='scattered clouds'){
      return 'broken_clouds'
    }
    if(this.state.description === 'smoke'){
      return 'smoke'
    }
    if(this.state.description === 'light rain'||this.state.description==='rain'){
      return 'rain'
    }

  }
  render() {
    return (
        <div className="main">
          <section className={'weather '+this.changeTemperature()}>

            <div className="form-area">
              <Titles/>

              <Form getWeather={this.getWeather} />


              <Weather
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  wind={this.state.wind}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  minTem={this.state.minTem}
                  maxTem={this.state.maxTem}
                  error={this.state.error}
              />
            </div>
          </section>


        </div>


    );
  }
};

export default App;