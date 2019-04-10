import React, { Component } from "react";

const Profile = props => (
  <div className="container">
    <br />
    <br />
    <br />
    <div className="row">
      <div className="col s3">
        <div className="card">
          <div className="card-image">
            <img alt="" src={props.Image} className="responsive-img" />{" "}
          </div>
          <div className="card-content">
            <ul>
              <li>{props.Name}</li>
              <li>{props.Email}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col s1" />
      <div className="col s8">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  className="validate"
                  name="name"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  className="validate"
                  name="email"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Address"
                  id="address"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Phone"
                  id="phone"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
          </form>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
