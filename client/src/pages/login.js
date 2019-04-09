import React, { Component } from "react";
import Test from "../components/Test";
import API from "../utils/API";
import axios from "axios";
import UserLogin from "../components/UserLogin";

// function Login() {

//   componentDidMount() {
//     this.loadcustomer();
//   }

//   loadcustomer = () =>{
//     API.getcustomer()
//     .then(res =>
//       console.log(res))
//   }

//   render(){
//   return(
//     <div>
//       <UserLogin />
//     </div>
//   )
//   }
// };

export default class Login extends Component {
  state = {
    customer: [],
    order: []
  };

  componentDidMount() {
    this.loadcustomer();
  }

  loadcustomer = () => {
    API.getcustomer().then(res => {
      console.log("response", res);
      this.setState({ customer: res.data[0] });
    });
  };

  loadorder = () => {
    API.getorder().then(res => {
      console.log("order response", res);
      this.setState({ order: res.data[0] });
    });
  };

  render() {
    return (
      <div className="container">
        <Test
          name={this.state.customer.Name}
          order={this.state.order.OrderDate}
        />
        <button onClick={this.loadcustomer}>Test</button>
        <button onClick={this.loadorder}>Test Order</button>
        <UserLogin />
      </div>
    );
  }
}

// export default class Login extends Component {

//   render(){
//     return (
//       componentDidMount() {
//     this.loadcustomer();
//   }

//   loadcustomer = () =>{
//     API.getcustomer()
//     .then(res =>
//       console.log(res))
//   }
//     );
//   }

//   // state = {

//   // };

// };

// function login() {
//   return (
//     <div className="container">
//       <UserLogin />
//     </div>
//   );
// }
