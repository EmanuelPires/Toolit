import React, { Component } from "react";
import Login from "./pages/login";
import Search from "./pages/search";
import "./App.css";
import MyProfile from "./pages/myProfile";
import MyOrders from "./pages/myOrders";
import MyProducts from "./pages/MyProducts";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/myProfile" component={MyProfile} />
          <Route exact path="/myOrders" component={MyOrders} />
          <Route exact path="/MyProducts" component={MyProducts} />
        </div>
      </Router>
    );
  }
}

export default App;
