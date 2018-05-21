import React, {Component} from 'react';

export default class SearchBar extends Component {

  render() {
    // onChange is react property
    // handles https://developer.mozilla.org/en-US/docs/Web/Events/change
    return <input onChange={event => console.log(event.target.value)}/>;
  }

}
