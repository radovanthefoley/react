import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this
      .onInputChange
      .bind(this);
    this.onFormSubmit = this
      .onFormSubmit
      .bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this
      .props
      .fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather
  }, dispatch);
}

// null because we do not care about global redux staet in this container
export default connect(null, mapDispatchToProps)(SearchBar);
