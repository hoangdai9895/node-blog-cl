import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postsActions";

class PostItem extends Component {
  deleteP = id => {
    if (window.confirm("Are you sure????")) {
      this.props.deletePost(id);
    }
  };

  render() {
    const { post } = this.props;
    // console.log(post);
    return (
      <div className="col-md-4">
        <div className="card mt-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.author}</p>
            <Link
              to={`/posts/${post._id}`}
              className="btn btn-primary btn-block"
            >
              View Detail
            </Link>
            <button
              className="btn btn-danger  btn-block"
              onClick={() => this.deleteP(post._id)}
            >
              <i className="far fa-trash-alt" />
            </button>
            <Link
              className="btn btn-info btn-block"
              to={`/posts/edit/${post._id}`}
            >
              <i className="far fa-edit" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
