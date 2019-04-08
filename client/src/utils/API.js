import axios from "axios";

export default {
  // Gets all books
  getcustomer: function() {
    console.log("Axios call");
    return axios.get("http://localhost:3001/api/user/customer");
  },

  //gets products
  getProduct: function(query) {
    console.log("search axios call " + query);
    return axios.get("http://localhost:3001/api/tool/toolsearch/" + query);
  }
};
