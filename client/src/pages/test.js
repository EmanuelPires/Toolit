import React, { Component } from "react";
import Test from "../components/Test";
import API from "../utils/API";
import {storage} from '../Firebase'; 
import axios from 'axios';



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
    order: [],
    image: null,
    url: '',
    progress: 0,
    id :1
  }

  componentDidMount(){
    this.loadcustomer();
  }

  loadcustomer = () =>{
    API.getcustomer(1)
    .then(res => {
      console.log('response', res)
      this.setState({customer: res.data[0]})
    })  
  } ;

  loadorder = () =>{
    API.getorder()
    .then(res =>{
      console.log('order response', res);
      this.setState({order: res.data[0]})
    })
  };

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  };


  distancecalculation = e =>{
    e.preventDefault();
    const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";

    const placeIdOne = "ChIJjWklvpNLtokRtcTMzgqIVLE";
    const placeIdTwo =
      "Eio2MDAxIFBydWRlbmNlIERyLCBBbm5hbmRhbGUsIFZBIDIyMDAzLCBVU0EiGxIZChQKEgmLoOLlpU22iRFUR3j674HE9hDxLg";

    const baseUrl =
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&";
    const param1 =
      "origins=place_id:" +
      placeIdOne +
      "&destinations=place_id:" +
      placeIdTwo +
      "&key=" +
      MY_API_KEY;

      const obj= {
        placeIdOne: "ChIJjWklvpNLtokRtcTMzgqIVLE",
        placeIdTwo: "Eio2MDAxIFBydWRlbmNlIERyLCBBbm5hbmRhbGUsIFZBIDIyMDAzLCBVU0EiGxIZChQKEgmLoOLlpU22iRFUR3j674HE9hDxLg",
        MY_API_KEY: "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410"
      }

      API.distanceCalculator(placeIdOne, placeIdTwo).then(data=>{
        console.log(data)
      })

  
  }


  handleUpload = () => {
    const {image} = this.state;
    const name = image.name+"_"+Date.now();
    console.log(name); 
    const uploadTask = storage.ref(`images/${name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('images').child(name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });
};

  render(){
    return (
      <div className="container">
        <Test name={this.state.customer.Name} order={this.state.order.OrderDate}/>
        <button onClick={this.loadcustomer} >Test</button>
        <button onClick={this.loadorder}>Test Order</button>
        <br/>
        <progress value={this.state.progress} max="100"/>
        <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button> 

        <button onClick={this.distancecalculation}>Calculate</button> 
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


