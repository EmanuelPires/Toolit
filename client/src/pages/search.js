import React, { Component } from "react";
import Navbar from "../components/Navbar";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
import SearchResults from "../components/SearchResults";
import Products from "../product.json";
//Working on getting distance calc to work with json file.
import Customer from "../customer.json";
import axios from "axios";
const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";

export default class Search extends Component {
  state = {
    search: "",
    value: "",
    searchResults: Products,
    currentCustomer: Customer
  };
  handleInputChange = e => {
    this.setState({ search: e.target.value, value: e.target.value });
  };

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
    this.setState({ search: "", value: geocodedPrediction.formatted_address });
  };

  handleNoResult = () => {
    console.log("No results for ", this.state.search);
  };

  handleSearch = () => {
    console.log("submit button clicked");
    const placeIdOne = this.state.currentCustomer.placeId;
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

    axios.get(baseUrl + param1).then(data => {
      console.log(data);
    });
  };
  render() {
    const { search, value, searchResults } = this.state;
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
                            : "My custom no results text"}
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
            <div className="col s2">
              <button
                className="btn waves-effect waves-light"
                id="searchBtn"
                onClick={this.handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div />
        </div>
        {this.state.searchResults.map(searchResults => (
          <SearchResults
            image={searchResults.image}
            name={searchResults.name}
            stock={searchResults.stock}
            available={searchResults.available}
            price={searchResults.price}
            description={searchResults.description}
            key={searchResults.image}
          />
        ))}
      </div>
    );
  }
}

//
