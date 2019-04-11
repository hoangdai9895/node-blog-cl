import React, { Component } from "react";
// import CKEditor from "react-ckeditor-component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoriesActions";
import { addPost } from "../../actions/postsActions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      title: "",
      category: "default",
      author: ""
    };
  }

  // onChangeCK = e => {
  //   this.setState({
  //     body: e.editor.getData()
  //   });
  // };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPost = () => {
    let post = {
      body: this.state.body,
      title: this.state.title,
      category: this.state.category,
      author: this.state.author
    };
    this.props.addPost(post);
    window.confirm("Add successully")
      ? (window.location.href = "/posts")
      : (window.location.href = "/posts/add");
  };
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { categories } = this.props.categories;
    // console.log(categories);
    return (
      <div className="container mt-5">
        <h1 className="text-center text-uppercase mt-5">Add Post</h1>
        <Link className="btn btn-info float-left my-3" to="/posts">
          Go back
        </Link>
        <input
          type="text"
          placeholder="Blog title"
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
          {categories &&
            categories.map((e, key) => {
              return (
                <option key={key} value={e.title}>
                  {e.title}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="form-control mb-3"
          onChange={this.onChange}
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Your content go here</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            this.setState({
              body: data
            });
          }}
        />
        <button
          className="btn btn-primary my-3 btn-block"
          onClick={this.addPost}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { getCategories, addPost }
)(AddPost);
