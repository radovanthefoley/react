import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    // onChange is react property
    // handles https://developer.mozilla.org/en-US/docs/Web/Events/change
    return <div>
      // always change state calling setState!!! reactjs magic needs to run
      <input onChange={event => this.setState({term: event.target.value})}/>
      Value of input: {this.state.term}
    </div>;
  }

}
