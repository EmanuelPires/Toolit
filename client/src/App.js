//IMPORT CLEANUP

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

//CSS
import "./App.css";

//Pages
import Home from "./pages/Home";
import Search from "./pages/search";
import MyProfile from "./pages/myProfile";
import myOrders from "./pages/myOrders";
import MyProducts from "./pages/myProducts";

//Components
import Navbar from "./components/Navbar";
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
          {/* Navbar for quick testing secure routes */}
          <Navbar />
          <div className="App">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/search" exact={true} component={Search} />
            <Route path="/myProfile" exact={true} component={MyProfile} />
            <Route path="/myOrders" exact={true} component={myOrders} />
            <Route path="/MyProducts" exact={true} component={MyProducts} />

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
