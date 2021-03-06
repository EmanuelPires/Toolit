import React, { Component } from "react";
import Navbar from "../components/Navbar";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import axios from "axios";

const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";

export default class Search extends Component {
  state = {
    toolSearch: "",
    search: "",
    value: "",
    searchResults: [],
    currentCustomer: {}
  };
  handleToolInputChange = e => {
    this.setState({ toolSearch: e.target.value });
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


  componentDidMount = e => {
    const keys = Object.keys(localStorage);
    // console.log(Object.keys(localStorage));
    console.log(keys[2]);
    const token = keys[2];

    const idToken = localStorage["okta-token-storage"];
    const tokenjson = JSON.parse(idToken);
    const tmp = tokenjson["idToken"];
    const OKTA_ID = tmp["clientId"];
    const Email = tmp.claims.email;
    console.log(OKTA_ID);
    console.log(Email);
    console.log(tokenjson);
    
    API.getCustomerWithEmail(Email)
      .then(res => {
        console.log(res);
        this.setState({ currentCustomer: res });
        console.log(this.state.currentCustomer);
      })

      if (!this.state.currentCustomer.data){
        let obj = {
          CustomerEmail: Email,
          OktaID: OKTA_ID
        };
        API.createCustomer(obj).then(response => {
          console.log(response);
        });
      };
    }
;

  handleSearch = event => {
    event.preventDefault();
    console.log("submit button clicked");
    const query = this.state.toolSearch.toUpperCase();
    console.log(this.state.toolSearch);
    API.getProduct(query).then(res => {
      this.setState({ searchResults: res.data });
      console.log(this.state.searchResults);
    });
  };

  NewOrder = (result, e) => {
    e.preventDefault();
    console.log("Adding New order");
    const obj = {
      OrderCost: result.UnitPrice*1,
      Quantity: 1,
      FK_CustomerID: result.SupplierID,
      FK_ProductID: result.ProductID
    };
    console.log(obj);
    debugger;
    API.NewOrder(obj).then(res =>{
      console.log(res);
      alert("Thank you for you order!");
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
                onChange={this.handleToolInputChange}
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
            image={searchResults.Image}
            name={searchResults.Product_Name}
            stock={searchResults.Stock}
            available={searchResults.Availability}
            price={searchResults.UnitPrice}
            NewOrder = {(e)=>this.NewOrder(searchResults,e)}
            key={searchResults.ProductID}
          />
        ))}
      </div>
    );
  }
}

//

// const placeIdOne = this.state.currentCustomer.placeId;
//     const placeIdTwo =
//       "Eio2MDAxIFBydWRlbmNlIERyLCBBbm5hbmRhbGUsIFZBIDIyMDAzLCBVU0EiGxIZChQKEgmLoOLlpU22iRFUR3j674HE9hDxLg";

//     const baseUrl =
//       "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&";
//     const param1 =
//       "origins=place_id:" +
//       placeIdOne +
//       "&destinations=place_id:" +
//       placeIdTwo +
//       "&key=" +
//       MY_API_KEY;

//     axios.get(baseUrl + param1).then(data => {
//       console.log(data);
//     });
