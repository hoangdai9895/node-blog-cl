import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, deleteComment } from "../../actions/postsActions";
class Comment extends Component {
  addComment = id => {
    let comment = {
      text: this.state.text
    };
    this.props.addComment(id, comment);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteComment = (post_id, comment_id) => {
    if (window.confirm("Are you sure??")) {
      this.props.deleteComment(post_id, comment_id);
    }
  };

  componentWillUpdate() {}
  render() {
    // console.log(this.props.comments);
    let listComment;
    if (this.props.comments !== undefined) {
      listComment = this.props.comments.map((e, key) => {
        return (
          <div className="comment" key={key}>
            <div className="name text-left p-2">{e.name}</div>
            <div className="d-flex justify-content-between align-items-center bg-light p-2">
              <p className="comment text-left  m-0 pl-3">{e.text}</p>
              <button
                className="btn btn-danger"
                onClick={() => this.deleteComment(this.props.id, e._id)}
              >
                <i className="far fa-trash-alt" />
              </button>
            </div>
          </div>
        );
      });
    }
    // const { comments } = this.props.comments;
    // console.log(this.props.comments);
    return (
      <div className="list-coment">
        {listComment}
        <hr />
        <label htmlFor="comment"> Your comment</label>
        <input
          type="text"
          className="form-control"
          name="text"
          htmlFor="comment"
          placeholder="Yout comment"
          onChange={this.onChange}
        />
        <button
          className="btn btn-primary btn-block my-3"
          onClick={() => this.addComment(this.props.id)}
        >
          Send
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { addComment, deleteComment }
)(Comment);
