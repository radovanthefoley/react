import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostShow extends Component {

  componentDidMount() {
    // given to us by router
    const {id} = this.props.match.params;
    this
      .props
      .fetchPost(id);
  }

  render() {
    const {post} = this.props;

    // handle initial render that happens before componentDidMount
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is second argument! - props of the component
function mapStateToProps({
  posts
}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
