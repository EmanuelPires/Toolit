import React, { Component } from "react";
import Test from "../components/Test";
import API from "../utils/API";
import {storage} from '../Firebase'; 



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


  handleUpload = () => {
    const {image,id} = this.state;
    const name = id+"_"+image.name;
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
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button> 
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


