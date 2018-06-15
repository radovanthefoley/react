import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import {deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostShow extends Component {

  componentDidMount() {
    // given to us by router
    const {id} = this.props.match.params;
    this
      .props
      .fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
    this
      .props
      .deletePost(id, () => this.props.history.push('/'));
  }

  render() {
    const {post} = this.props;

    // handle initial render that happens before componentDidMount
    if (!post) {
      return (
        <div>
          <Link className="btn btn-secondary" to="/">Back To Index</Link>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <Link className="btn btn-secondary" to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this
            .onDeleteClick
            .bind(this)}>Delete Post</button>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);
