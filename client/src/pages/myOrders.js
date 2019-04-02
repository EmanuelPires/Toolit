import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";
import Orderhistory from "../Orderhistory.json";
// import "./style.css";

class MyOrders extends Component {
  state = {
    Orderhistory
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="card">
            <h1>TESTING 123</h1>
          </div>
          <div>
            {this.state.Orderhistory.map(Orderhistory => (
              <Orders
                image={Orderhistory.image}
                item={Orderhistory.item}
                productID={Orderhistory.productID}
                OrderDate={Orderhistory.OrderDate}
                OrderQuantity={Orderhistory.OrderQuantity}
                OrderCost={Orderhistory.OrderCost}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyOrders;
