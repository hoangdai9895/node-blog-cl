import React, { Component } from "react";
import InputFieldGroup from "./common/inputField";
import { connect } from "react-redux";

// action
import { registerUser } from "../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {
        name: ""
      }
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/node-blog-cl");
    }
  };

  render() {
    // console.log(this.state.errors.name.length);
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center"> Sign Up </h1>
              <p className="lead text-center">Create your Blog account</p>
              <form onSubmit={e => this.onSubmit(e)}>
                <InputFieldGroup
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onChange={e => this.onChange(e)}
                  error={
                    this.state.name.length < 3 ? this.state.errors.name : null
                  }
                />
                <InputFieldGroup
                  name="email"
                  type="email"
                  placeholder="Your Email address"
                  onChange={e => this.onChange(e)}
                />
                <InputFieldGroup
                  name="password"
                  type="password"
                  placeholder="Your password"
                  onChange={e => this.onChange(e)}
                />
                <InputFieldGroup
                  name="password2"
                  type="password"
                  placeholder="Confirm your password"
                  onChange={e => this.onChange(e)}
                  error={
                    this.state.name.length < 3 ? this.state.errors.name : null
                  }
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProsp = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProsp,
  { registerUser }
)(Register);
