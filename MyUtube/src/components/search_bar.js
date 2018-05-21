import React, {Component} from 'react';

export default class SearchBar extends Component {

  render() {
    // onChange is react property
    return <input onChange={this.onInputChange}/>;
  }

  // handles https://developer.mozilla.org/en-US/docs/Web/Events/change
  onInputChange(event) {
    console.log(event.target.value);
  }
}
