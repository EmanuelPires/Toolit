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
  }
};
