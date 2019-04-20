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
    Phone: "",
    imageurl: '',
    progress: 0,
    Address:''
  };


  updateMyProfile = (id, e) => {
    e.preventDefault();
    let updateValues = {
      Name: this.state.Name,
      Email: this.state.Email,
      Phone: this.state.Phone,
      PlaceID: this.state.searchPlaceID,
      Image: this.state.imageurl,
      Address: this.state.value
    };
    console.log(updateValues);
    debugger;
    API.updateMyProfile(id, updateValues).then(res => {
      console.log(res.data);
    });
    window.location.reload();
  };

  componentDidMount=() =>{
    this.getUser();
    console.log(this.state);
    debugger;
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
    e.preventDefault();
    this.setState({
      search: e.target.value,
      value: e.target.value
    });
    this.handleUpdateValueChange(e);
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


  handleNoResult = () => {
    console.log("No results for ", this.state.search);
  };

  placeIDConsoleLog = () => {
    console.log(this.state.searchPlaceID);
  };

  handleChange = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
    debugger;
  };


  handleUpload = (e) => {
    e.preventDefault();
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
          this.setState({imageurl: url});
      })
      debugger;
  });

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
                    src={this.state.userLoggedIn.Image}
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
                                  name="Address"
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
                      <progress value={this.state.progress} max="100"/>
                      <br/> 
                      <input
                        type="file"
                        name="imageFile"
                        onChange={(e)=>{this.handleChange(e)}}
                      />
                      <button onClick={(e)=>{this.handleUpload(e)}}>Upload Image</button> 
                    </div>
                  </div>
                </form>
                <Button onClick={(e)=>this.updateMyProfile(this.state.user, e)}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}