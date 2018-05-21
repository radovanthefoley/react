import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAc6HnYOD2eUGMVGjj1GRmREsnhaZa4Bx8';

const App = () => {
  return <div>
    <SearchBar/>
  </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));
