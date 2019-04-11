import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, updatePost } from "../../actions/postsActions";
import { getCategories } from "../../actions/categoriesActions";
import { Link } from "react-router-dom";
// import CKEditor from "react-ckeditor-component";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      category: "",
      author: "",
      date: new Date()
    };
  }

  componentDidMount = () => {
    this.props.getPost(this.props.match.params.id);
    this.props.getCategories();
  };

  onChangeCK = e => {
    this.setState({
      body: e.editor.getData()
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updatePost = id => {
    var post = {};
    post = {
      body:
        this.state.body === "" ? this.props.post.post.body : this.state.body,
      title:
        this.state.title === "" ? this.props.post.post.title : this.state.title,
      category:
        this.state.category === ""
          ? this.props.post.post.category
          : this.state.category,
      author:
        this.state.author === ""
          ? this.props.post.post.author
          : this.state.author,
      date: this.state.date
    };
    // console.log(post);
    this.props.updatePost(id, post);
    if (window.confirm("Edit successully")) {
      //   window.location.href = "/posts";
      window.history.back();
    }
  };

  render() {
    const { post } = this.props.post;
    // console.log(post);
    const { categories } = this.props.categories;
    return (
      <div>
        <h1 className="text-center text-upercase display-4 w-100">Edit post</h1>

        <div className="content">
          <div className="container mt-5">
            <Link className="btn btn-info float-left my-3" to="/posts">
              Go back
            </Link>
            <input
              type="text"
              placeholder="Blog title"
              defaultValue={post.title}
              name="title"
              className="form-control mb-3"
              onChange={this.onChange}
            />
            <select
              name="category"
              id=""
              className="custom-select mb-3 "
              onChange={this.onChange}
            >
              {<option value={post.category}>{post.category}</option>}
              {categories &&
                categories.map((e, key) => {
                  if (e.title !== post.category) {
                    return (
                      <option key={key} value={e.title}>
                        {e.title}
                      </option>
                    );
                  }
                })}
            </select>
            <input
              type="text"
              name="author"
              placeholder="Author"
              defaultValue={post.author}
              className="form-control mb-3"
              onChange={this.onChange}
            />
            <CKEditor
              editor={ClassicEditor}
              data={post.body ? post.body : "<p>Your main content</>"}
              onChange={(event, editor) => {
                this.setState({
                  body: editor.getData()
                });
              }}
            />
            <button
              className="btn btn-primary my-3 btn-block"
              onClick={() => this.updatePost(this.props.match.params.id)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.posts,
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getPost, getCategories, updatePost }
)(EditPost);
