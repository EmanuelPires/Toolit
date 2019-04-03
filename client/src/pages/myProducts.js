import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProductMain  from "../components/ProductMain";
import Product from "../product.json"
// import "./style.css";


class MyProducts extends Component {

  state= {
    product: Product
  };

  render() {
    return (
      <div>
        <Navbar /> 
        <ProductMain />
      </div>
    );
  }
}

export default MyProducts;
