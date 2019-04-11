import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
class CategoriesItem extends Component {
  render() {
    const { categories } = this.props;
    return (
      categories.length > 0 &&
      categories.map((cat, key) => {
        return <Item cat={cat} key={key} />;
      })
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CategoriesItem);
