import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Summery from "../components/Summary";
import Testimony from "../components/Testimony";
// import "../css/style.css";

function myProfile() {
  return (
    <div>
      <Navbar />
      <Summery />
      <Testimony />
    </div>
  );
}

export default myProfile;