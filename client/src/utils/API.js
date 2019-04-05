import axios from "axios";

export default {
  // Gets all books
  getcustomer: function() {
    return axios.get("/");
  }
};