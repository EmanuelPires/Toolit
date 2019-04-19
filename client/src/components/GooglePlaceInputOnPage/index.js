import React, { Component } from "react";

import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";

export default class GooglePlaceInputOnPage extends Component {
  state = {
    value: "",
    search: "",
    searchPlaceID: ""
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value, value: e.target.value });
  };

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
    this.setState({
      search: "",
      value: geocodedPrediction.formatted_address,
      searchPlaceID: geocodedPrediction.place_id
    });
    this.props.placeID(this.state.searchPlaceID);
  };

  handleNoResult = () => {
    console.log("No results for ", this.state.search);
  };

  handleSearch = event => {
    event.preventDefault();
  };

  render() {
    const { search, value, searchResults } = this.state;
    return (
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
                      : "My custom no results text"}
                  </div>
                )}
              >
                <input
                  type="text"
                  value={value}
                  placeholder=""
                  onChange={this.handleInputChange}
                />
              </GooglePlacesSuggest>
            )
          }
        />
      </div>
    );
  }
}