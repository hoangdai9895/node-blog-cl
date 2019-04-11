import React, { Component } from "react";
import InputFieldGroup from "./common/inputField";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> Log In </h1>{" "}
              <p className="lead text-center">Sign in to your Blog Account</p>
              <form onSubmit={e => this.onSubmit(e)}>
                <InputFieldGroup
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={e => this.onChange(e)}
                />
                <InputFieldGroup
                  name="password"
                  type="password"
                  placeholder="Your password"
                  onChange={e => this.onChange(e)}
                />
                <input
                  type="submit"
                  className="btn btn-outline-primary btn-block mt-4"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
