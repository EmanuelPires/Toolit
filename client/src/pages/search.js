import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import "./style.css";

function search() {
  return (
    <div>
      <Navbar />
      <div className="container  ">
        <div className="center-align">
          <h2>Toolit</h2>
          <p className="flow-text center-align">
            When it’s time to buy, rent instead. Toolit connects locals to the
            tools they need to build and create.&nbsp;
          </p>
        </div>
        <div className="row">
          <div className="autocomplete col s5">
            <input
              type="text"
              id="toolSearch"
              placeholder="What tools do you need"
            />

            <div className="dialog" />
          </div>

          <div className="autocomplete2 col s5">
            <input
              type="text"
              id="locationSearch"
              placeholder="Search by location"
            />
          </div>
          <div className="col s2">
            <button className="btn waves-effect waves-light" id="searchBtn">
              <i className="fas fa-search center-align" />
            </button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default search;
