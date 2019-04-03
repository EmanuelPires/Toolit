import React, { Component } from "react";
import Navbar from "../components/Navbar";
import orders from "../order.json";

// import "./style.css";

class MyOrders extends Component {

  state= {
    order: orders
  };

  render() {
    return (
      <div>
        <Navbar /> 
      </div>
    );
  }
}

export default MyOrders;
