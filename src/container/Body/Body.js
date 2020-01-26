import React,{Component} from 'react';
import './Body.css';
import Titles from "../../components/Title/Titles";
import Form from "../../components/Form/Form";
import Weather from "../../components/Weather/Weather";
import WeekWeather from './WeekWeather/WeekWeather';
import axios from 'axios';
import Moreinfo from "../../components/Weather/Moreinfo";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import MapContainer from "../../components/Weather/Map";
const API_KEY = "dd7f759d261762ebbb8cb130af247f30";
const API2_KEY="1130b709-f3a0-40a7-8338-60a03161e4ab";
class Body extends Component{
    state = {
      location:undefined,
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

    componentDidMount(){
        axios.get('https://api.ipfind.com/me?auth=1130b709-f3a0-40a7-8338-60a03161e4ab').
        then(res=>{
            console.log(res);
            this.setState({
                location:[res.data.city],
            });
            this.setState({
                city:this.state.location
            })
            console.log(this.state.location)
            console.log(this.state.city)
            return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=dd7f759d261762ebbb8cb130af247f30`);
        })
            .then(response=>{
                this.setState({
                    temperature:response.data.main.temp,
                    city: response.data.name,
                    country: response.data.sys.country,
                    humidity: response.data.main.humidity,
                    description: response.data.weather[0].description,
                    wind:response.data.wind.speed  ,
                    sunrise:response.data.sys.sunrise,
                    sunset:response.data.sys.sunset,
                    minTem:response.data.main.temp_min,
                    maxTem:response.data.main.temp_max,
                })
                console.log(response);
            })
        console.log("46");

    }
      getWeather = async (e) => {
          e.preventDefault();
        const city = e.target.city.value;
        console.log(city);




        // const country = e.target.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city) {
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
            temperature:
            undefined,
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
            <div className="body">
              <section className={'weather '+this.changeTemperature()}>

    
                <div className="form-area">
                  <Titles/>
                  <Form getWeather={this.getWeather} />

    
                  </div>
                  <div className="weatherInfo">
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

                  {/*<ReactWeather*/}
                  {/*    forecast="today"*/}
                  {/*    apikey="dd7f759d261762ebbb8cb130af247f30"*/}
                  {/*    type="city"*/}
                  {/*    city={"Kathmandu"}*/}
                  {/*/>*/}
                  <div className={"map"}>
                    <MapContainer/>
                  </div>
                
              </section>
    
    
            </div>
    
    
        );
      }
    };

export default Body;