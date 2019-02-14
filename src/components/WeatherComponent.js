import React, { Component } from 'react';

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        temperature: '',
        climate: '',
        ikoni: '',
        };
  }

  componentDidMount() {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&APPID=b452af841ef38883145b7302033d8de9')
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              temperature: responseData.main.temp,
              climate: responseData.weather[0].description,
              ikoni: "http://openweathermap.org/img/w/"+responseData.weather[0].icon+".png",
          });
      })
  }

    render() {
        return <div>
        <div>Temperature: {this.state.temperature} Celsius</div>
        <div>Weather: {this.state.climate}</div>
        <div><img src={this.state.ikoni} alt="icon"/></div>
        </div>
    }
}
export default WeatherComponent;