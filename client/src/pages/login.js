import React, { Component } from "react";
import Test from "../components/Test";
import API from "../utils/API";
import axios from "axios";



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
    customer: []
  }


  loadcustomer = () =>{
    API.getcustomer()
    .then(res =>
      this.setState({customer: res.data})
      )
  } ;

  render(){
    return (
      <div className="container">
        <Test name={this.customer}/>
        <button onClick={this.loadcustomer} >Test</button>
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


