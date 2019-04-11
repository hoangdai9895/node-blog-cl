import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mt-5 pt-5">
                <h1 className="display-4 mb-4 mt-5">Blog</h1>
                <hr />
                <p className="lead display-4"> Create Your Blog</p>
              </div>
            </div>
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
  {}
)(Landing);
