import axios from "axios";

export default {
  createCustomer: function(obj) {
    console.log("Creating Customer" + obj);
    return axios.post("http://localhost:3001/api/user/newuser/", obj);
  },
  getCustomerWithEmail: function(email) {
    console.log("getting the customer with email from OKTA");
    return axios.get("http://localhost:3001/api/user/login/" + email);
  },
  // Gets all books
  getcustomer: function() {
    console.log("Axios call");
    return axios.get("http://localhost:3001/api/user/customer");
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
