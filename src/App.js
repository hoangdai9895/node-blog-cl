import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
// store
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./components/not-found/NotFound";
import NavBar from "./components/layouts/NavBar";
import Landing from "./components/layouts/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/layouts/Footer";

import PrivateRouter from "./components/common/PrivateRouter";

import setAuthToken from "./utils/setAuthToken";
import Categories from "./components/categories/Categories";
import jwt_decode from "jwt-decode";
import { setCuttentUser, logoutUser } from "./actions/authActions";
import Posts from "./components/posts/Posts";
import AddPost from "./components/posts/AddPost";
import Post from "./components/posts/Post";
import EditPost from "./components/posts/EditPost";

// check for token
if (localStorage.jwtToken) {
  // set header
  setAuthToken(localStorage.jwtToken);
  // decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  // setcurrent user
  // console.log(decoded);
  store.dispatch(setCuttentUser(decoded));
  // check expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout
    store.dispatch(logoutUser());
    // clear curretn user
    // store.dispatch(clearCurrentUser());
    // redirect
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="container fixed-top px-0">
              <NavBar />
            </div>
            <Route exact path="/node-blog-cl" component={Landing} />
            <div className="container">
              <Route exact path="/node-blog-cl/login" component={Login} />
              <Route exact path="/node-blog-cl/register" component={Register} />

              <Switch>
                <PrivateRouter
                  exact
                  path="/node-blog-cl/posts"
                  component={Posts}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/node-blog-cl/posts/add"
                  component={AddPost}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/node-blog-cl/posts/:id"
                  component={Post}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/node-blog-cl/posts/edit/:id"
                  component={EditPost}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/node-blog-cl/categories"
                  component={Categories}
                />
              </Switch>

              <Route
                exact
                path="/node-blog-cl/not-found"
                component={NotFound}
              />
            </div>
            <div className="container-fluid px-0">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
