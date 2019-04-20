import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";
import API from "../utils/API";
import { privateDecrypt } from "crypto";


// import "./style.css";

class MyOrders extends Component {
  state = {
    user: 1,
    Orders: [],
    Rating: '',
    Comments:'',
    Product_ID : ''
  };

componentDidMount(){
  this.getorders(this.state.user);
};

handleUpdateValueChange = event => {
  console.log(event.target);
  debugger;
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
  console.log(this.state.Rating);
  console.log(this.state.Comments);
  debugger;
};

handleRatingChange = event => {
  console.log(event.target);
  debugger;
  this.setState({
    Rating: event.target.value
  });
  console.log(this.state.Rating);
  debugger;
};

handleProductChange = id => {
  debugger;
  this.setState({
    Product_ID: id
  });
  console.log(this.state.Product_ID);
};

getorders=(user)=>{
  console.log("These are the orders for customer"+user);
  API.getorders(user).then(res => {
    console.log(res.data);
    this.setState({
      Orders : res.data
    })
    console.log(this.state.Orders);
  });
};

CreateFeedback=(id)=>{
debugger;
  var feedback = {
    FK_ProductID: id,
    Rating: this.state.Rating,
    Comments: this.state.Comments
  }
  console.log(feedback);
debugger;
  API.SaveFeedback(feedback).then(res=>{
    console.log(res.data);
  })

}




  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Order History</h1>

          <div>
            {this.state.Orders.map(order => (
              <Orders key = {order.OrderID}
                OrderDate={order.OrderDate}
                OrderCost={order.OrderCost}
                Quantity={order.Quantity}
                FK_CustomerID={order.FK_CustomerID}
                ProductID = {order.ProductID}
                image = {order.Image}
                item = {order.Product_Name}
                CreateFeedback = {()=>this.CreateFeedback(order.ProductID)}
                handleUpdateValueChange={this.handleUpdateValueChange}
                handleRatingChange = {this.handleRatingChange}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyOrders;
