import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: 'type in here'
    };
  }

  render() {
    // onChange is react property handles
    // https://developer.mozilla.org/en-US/docs/Web/Events/change always change
    // state calling setState!!! reactjs magic needs to run
    return <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})}/>
    </div>;
  }

}
