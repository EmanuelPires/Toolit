import React, { Component } from "react";
import Home from "./pages/login";
import Search from "./pages/search";
import "./App.css";
// import Home from "./pages/Home";
import MyProfile from "./pages/myProfile";
import myOrders from "./pages/myOrders";
import MyProducts from "./pages/myProducts";
import test from "./pages/test";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Login from "./components/auth/Login";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-150097.okta.com/oauth2/default"
          client_id="0oafziqe6tzWiJjt4356"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          {/* <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/myProfile" component={MyProfile} />
          <Route exact path="/myOrders" component={myOrders} />
          <Route exact path="/MyProducts" component={MyProducts} />
        </div> */}

          <div className="App">
            <Route
              path="https://toolit-deployed.herokuapp.com"
              exact={true}
              component={Home}
            />
            <SecureRoute path="/search" exact={true} component={Search} />
            <SecureRoute path="/myProfile" exact={true} component={MyProfile} />
            <SecureRoute path="/myOrders" exact={true} component={myOrders} />
            <SecureRoute path="/test" exact={true} component={test} />
            <SecureRoute
              path="/MyProducts"
              exact={true}
              component={MyProducts}
            />

            {/* Reroute not working, widget not loading */}
            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-150097.okta.com" />}
            />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
