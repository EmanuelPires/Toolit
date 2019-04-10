import axios from "axios";

export default {
  // Gets all books
  getcustomer: function(query) {
    console.log("Axios call " + query);
    return axios.get("http://localhost:3001/api/user/login/" + query);
  },

  //gets products
  getProduct: function(query) {
    console.log("search axios call " + query);
    return axios.get("http://localhost:3001/api/tool/toolsearch/" + query);
  },

  getorder: function() {
    console.log("Axios Call for Orders");
    return axios.get("http://localhost:3001/api/user/order");
  }
};
