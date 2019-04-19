import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Button } from "react-materialize";
import API from "../utils/API";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
import {storage} from '../Firebase'; 

const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";
// import "./style.css";

export default class myProfile extends Component {
  state = {
    search: "",
    value: "",
    user: 1,
    userLoggedIn: [],
    image: "",
    searchPlaceID: "",
    imageFile: "",
    Name: "",
    Email: "",
    Phone: ""
  };

  updateMyProfile = id => {
    let imageData = this.readImageFile(this.state.imageFile);
    let updateValues = {
      Name: this.state.Name,
      Email: this.state.Email,
      Phone: this.state.Phone,
      PlaceID: this.state.searchPlaceID,
      Image: imageData
    };
    console.log(updateValues);
    debugger;
    API.updateMyProfile(id, updateValues).then(res => {
      console.log(res.data);
    });
    window.location.reload();
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const query = this.state.user;
    console.log("hello this is the query: " + query);
    API.getcustomer(query).then(res => {
      console.log(res.data[0].Name);
      this.setState({
        userLoggedIn: res.data[0],
        image: res.data[0].Image
      });
      console.log(this.state.userLoggedIn);
    });
  };


  handleInputChange = e => {
    this.setState({
      search: e.target.value,
      value: e.target.value
    });
  };

  fileSelectedHander = event => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      debugger;
      var dataURL = reader.result;
      this.setState({
        imageFile: dataURL
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  handleUpdateValueChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    console.log(this.state.Name);
    console.log(this.state.Email);
    console.log(this.state.Phone);
  };
  // updateValueFunction = () => {
  //   const updateValues = {
  //     Name: this.state.Name,
  //     Email: this.state.Email,
  //     Phone: this.state.Phone,
  //     PlaceID: this.state.searchPlaceID
  //   };
  //   return updateValues;
  // };

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
    this.setState({
      search: "",
      value: geocodedPrediction.formatted_address,
      searchPlaceID: geocodedPrediction.place_id
    });
  };

  updateMyImage = () => {
    const data = this.state.imageFile;
    debugger;
    console.log("data", data);
    API.UpdateImage(data).then(res => {
      console.log(res);
    });
  };

  handleNoResult = () => {
    console.log("No results for ", this.state.search);
  };

  placeIDConsoleLog = () => {
    console.log(this.state.searchPlaceID);
  };
  render() {
    const { search, value, searchResults } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col s3">
              <div className="card">
                <div className="card-image">
                  <img
                    src=""
                    alt="https://via.placeholder.com/150"
                    className="responsive-img"
                  />
                </div>
                <div className="card-content">
                  <ul>
                    <li />
                    <li />
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
                        placeholder={this.state.userLoggedIn.Name}
                        id="name"
                        type="text"
                        className="validate"
                        name="Name"
                        onChange={this.handleUpdateValueChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        placeholder={this.state.userLoggedIn.Email}
                        id="email"
                        type="text"
                        className="validate"
                        name="Email"
                        onChange={this.handleUpdateValueChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <div>
                        <GoogleMapLoader
                          params={{
                            key: MY_API_KEY,
                            libraries: "places,geocode"
                          }}
                          render={googleMaps =>
                            googleMaps && (
                              <GooglePlacesSuggest
                                googleMaps={googleMaps}
                                autocompletionRequest={{
                                  input: search
                                  // Optional options
                                  // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                                }}
                                // Optional props
                                onNoResult={this.handleNoResult}
                                onSelectSuggest={this.handleSelectSuggest}
                                textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                                customRender={prediction => (
                                  <div className="customWrapper">
                                    {prediction
                                      ? prediction.description
                                      : "This is not a valid location"}
                                  </div>
                                )}
                              >
                                <input
                                  type="text"
                                  value={value}
                                  placeholder="Search a location"
                                  onChange={this.handleInputChange}
                                />
                              </GooglePlacesSuggest>
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        placeholder={this.state.userLoggedIn.Phone}
                        id="phone"
                        type="text"
                        className="validate"
                        name="Phone"
                        onChange={this.handleUpdateValueChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <p>Update Your Profile Pic:</p>
                    <div className="input-field col s12">
                      <input
                        type="file"
                        name="imageFile"
                        onChange={this.fileSelectedHander}
                      />
                    </div>
                  </div>
                </form>
                <Button onClick={this.updateMyImage}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}