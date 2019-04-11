import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteCategory,
  updateCategory
} from "../../actions/categoriesActions";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.cat.title,
      flag: false
    };
  }
  deleteCat = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure ????")) {
      this.props.deleteCategory(id);
    }
  };

  close = e => {
    e.preventDefault();
    this.setState({
      flag: !this.state.flag
    });
  };

  edit = e => {
    e.preventDefault();
    this.setState({
      flag: !this.state.flag
    });
  };

  onChange = e => {
    if (e.target.value !== "") {
      this.setState({
        title: e.target.value
      });
    }
  };

  update = (e, id) => {
    e.preventDefault();
    this.setState({
      flag: !this.state.flag
    });
    let data = {
      title: this.state.title
    };
    this.props.updateCategory(id, data);
  };

  render() {
    const { cat, key } = this.props;
    // console.log(this.state);
    return (
      <tbody key={key}>
        <tr>
          <th scope="row">{cat._id}</th>
          <td>{cat.title}</td>
          <td>
            <button
              href="#"
              className="btn btn-primary mr-2"
              onClick={e => this.edit(e)}
            >
              <i className="far fa-edit" />
            </button>

            <button
              href="#"
              className="btn btn-danger mr-2"
              onClick={e => this.deleteCat(e, cat._id)}
            >
              <i className="far fa-trash-alt" />
            </button>
          </td>
        </tr>
        {this.state.flag ? (
          <tr>
            <td colSpan="2">
              <input
                type="text"
                name="title"
                className="form-control"
                defaultValue={cat.title}
                onChange={e => this.onChange(e)}
              />
            </td>
            <td>
              <button
                href="#"
                className="btn btn-success mr-2"
                onClick={e => this.update(e, cat._id)}
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
      </tbody>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  categories: state.categories
});

export default connect(
  mapStateToProps,
  { deleteCategory, updateCategory }
)(Item);
