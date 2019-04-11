import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories, addCategory } from "../../actions/categoriesActions";
import Loading from "../common/Loading";
import CategoriesItem from "./CategoriesItem";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      flag: false
    };
  }
  componentDidMount = () => {
    this.props.getCategories();
  };

  open = (e, data) => {
    this.setState({
      flag: !this.state.flag
    });
    e.preventDefault();
  };

  close = e => {
    this.setState({
      flag: !this.state.flag
    });
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  addCat = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    let newCategory = {
      title: this.state.title,
      name: user._id
    };
    this.props.addCategory(newCategory);
    this.setState({
      flag: !this.state.flag
    });
  };
  render() {
    const { categories, loading } = this.props.categories;
    let categoriesContent;
    if (categories === null || loading) {
      categoriesContent = (
        <tbody>
          <tr>
            <td colSpan="3">
              <Loading />
            </td>
          </tr>
        </tbody>
      );
    } else {
      categoriesContent = <CategoriesItem categories={categories} />;
    }

    return (
      <div className="Categories mt-5">
        <div className="container">
          <h1 className="text-center display-4 text-uppercase my-3">
            Categories
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">
                  Handle
                  {this.state.flag === false ? (
                    <button
                      href="#"
                      className="btn btn-primary ml-2"
                      onClick={e => this.open(e)}
                    >
                      <i className="fas fa-plus" />
                    </button>
                  ) : null}
                </th>
              </tr>
              {this.state.flag ? (
                <tr>
                  <td>Title</td>
                  <td>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={e => this.onChange(e)}
                    />
                  </td>
                  <td>
                    <button
                      href="#"
                      className="btn btn-success mr-2"
                      onClick={e => this.addCat(e)}
                    >
                      <i className="fas fa-check" />
                    </button>
                    <button
                      href="#"
                      className="btn btn-danger"
                      onClick={e => this.close(e)}
                    >
                      <i className="fas fa-times" />
                    </button>
                  </td>
                </tr>
              ) : null}
            </thead>
            {categoriesContent}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCategories, addCategory }
)(Categories);
