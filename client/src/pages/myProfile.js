import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import API from "../utils/API";
import axios from "axios";
// import "./style.css";

export default class myProfile extends Component {
  state = {
    user: 1,
    userLoggedIn: [],
    image:
      "https://i218.photobucket.com/albums/cc98/Proctor_06/crazynic.jpg?width=250&height=250&crop=1:1,smart"
  };
  componentDidMount() {
    this.getUser();
  }
  getUser = () => {
    const query = this.state.user;
    console.log("hello this is the query: " + query);
    API.getcustomer(query).then(res => {
      console.log(res.data);
      this.setState({
        userLoggedIn: res.data
      });
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Profile Image={this.state.image} Name={this.state.userLoggedIn.name} />
      </div>
    );
  }
}
