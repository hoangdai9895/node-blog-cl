import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postsActions";
import Loading from "../common/Loading";
import PostItem from "./PostItem";

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { posts, loading } = this.props.posts;
    // console.log(posts, loading);
    let PostContent;
    if (loading) {
      PostContent = <Loading />;
    } else {
      PostContent = posts.map((post, key) => (
        <PostItem post={post} key={key} />
      ));
    }
    return (
      <div className="contaier mt-5">
        <div className="row">
          <h1 className="text-center display-4 text-uppercase d-block w-100">
            All posts
          </h1>
          <Link to="/posts/add" className="btn btn-primary">
            <i className="fas fa-plus mr-1" /> Add Post
          </Link>
        </div>
        <div className="row">{PostContent}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
