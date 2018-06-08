import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {

  // lifecycle hook: good place to fetch data
  componentDidMount() {
    this
      .props
      .fetchPosts();
  }

  render() {
    return <div>
      <h3>Posts Index</h3>
    </div>;
  }
}

export default connect(null, {fetchPosts})(PostsIndex);
