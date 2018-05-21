import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAc6HnYOD2eUGMVGjj1GRmREsnhaZa4Bx8';

class App extends Component {

  render() {
    return <div>
      <SearchBar/>
    </div>;
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
