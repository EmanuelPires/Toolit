import axios from "axios";

export default {
  // 
  getcustomer: function(query) {
    console.log("Axios call " + query);
    return axios.get("http://localhost:3001/api/user/login/" + query);
  },

  // Getting customer with the email address
  getCustomerWithEmail: function(email) {
    console.log("getting the customer with email from OKTA");
    return axios.get("http://localhost:3001/api/user/email/" + email);
  },

  //gets products
  getProduct: function(query) {
    console.log("search axios call " + query);
    return axios.get("http://localhost:3001/api/tool/toolsearch/" + query);
  },


// Getting order
  getorder: function() {
    console.log("Axios Call for Orders");
    return axios.get("http://localhost:3001/api/user/order");
  },

  getUserProduct: function(id) {
    console.log("Test");
    return axios.get("http://localhost:3001/api/tool/usertools/" + id);
  },

  updateMyProduct: function(query, values) {
    console.log(
      "hello from client side API, query: " +
        query +
        " Values: " +
        JSON.stringify(values)
    );
    //values = JSON.parse(values);
    return axios.put(
      "http://localhost:3001/api/product/updatemyproduct/" + query,
      values
    );
  },

  DeleteProduct: function(id) {
    console.log("Delete Product API" + id);
    return axios.delete(
      "http://localhost:3001/api/product/deleteproduct/" + id
    );
  },

  getorders: function(id){
    console.log("Get the orders for the customerid "+id);
    return axios.get(
      "http://localhost:3001/api/order/getorders/"+id
    );
  },

  SaveFeedback: function(feedback){
    console.log("Taking the Feedback");
    return axios.post(
      "http://localhost:3001/api/review/feedback", feedback
    )
  },

  updateMyProfile: function(query, values) {
    console.log(
      "hello from client side API, query: " +
        query +
        " Values: " +
        JSON.stringify(values)
    );
    //values = JSON.parse(values);
    return axios.put(
      "http://localhost:3001/api/customer/updatemyprofile/" + query,
      values
    );
  }
};
