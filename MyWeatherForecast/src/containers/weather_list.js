import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {removeWeather} from '../actions/index';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    // need to do this, because renderWeather is called in the context of array map
    // function, so 'this' pointing to WeatherList would be gone
    this.renderWeather = this
      .renderWeather
      .bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData
      .list
      .map(weather => weather.main.temp);
    const pressures = cityData
      .list
      .map(weather => weather.main.pressure);
    const humidities = cityData
      .list
      .map(weather => weather.main.humidity);
    // ES6 multiple arguments extraction
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={temps} color="orange" units="°C"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa"/>
        </td>
        <td>
          <a
            className="btn btn-danger hide-button"
            onClick={() => this.props.removeWeather(cityData)}>x</a>
          <Chart data={humidities} color="black" units="%"/>
        </td>
      </tr>

    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{
            this
              .props
              .weather
              .map(this.renderWeather)
          }</tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}
// ES6 equivalent of function mapStateToProps(state) {  return {weather:
// state.weather}; }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeWeather: removeWeather
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
