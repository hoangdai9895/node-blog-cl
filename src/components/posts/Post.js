import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions/postsActions";
import Loading from "../common/Loading";
import Moment from "react-moment";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    // console.log(this.props);
    // console.log(post.comments);
    let PostContent;
    if (loading) {
      PostContent = <Loading />;
    } else {
      PostContent = (
        <div className="container mt-5">
          <h1 className="text-center text-upppercase dispaly-4">
            {post.title}
          </h1>
          <span className="inline-block ">
            {post.author} - {post.category} -{" "}
            <Moment format="DD/MM/YYYY">{post.date}</Moment>
          </span>

          <div className="row">
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </div>
      );
    }
    return (
      <div className="box1">
        {PostContent}
        <h3 className="text-center">Comment</h3>
        <div className="box-comment">
          <div className="el ">
            <Comment comments={post.comments} id={post._id} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
