import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProductMain from "../components/ProductMain";

import API from "../utils/API";

import { Modal, Button } from "react-materialize";

const trigger = <Button>Open Modal</Button>;
// import "./style.css";

class MyProducts extends Component {
  state = {
    user: 3,
    products: [],
    Product_Name: "",
    Price: "",
    Stock: ""
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    const id = this.state.user;
    console.log("hello this is the query: " + id);
    API.getUserProduct(id).then(res => {
      console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  };
  handleUpdateValueChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.Product_Name);
    console.log(this.state.Stock);
    console.log(this.state.Price);
  };

  updateValueFunction = () => {
    const updateValues = {
      Product_Name: this.state.Product_Name,
      Price: this.state.Price,
      Stock: this.state.Stock
    };
    return updateValues;
  };
  Products = () => {
    const query = this.state.user;
    console.log("hello this is the query: " + query);
    API.getUserProduct(query).then(res => {
      console.log(res.data);
      this.setState({
        products: res.data
      });
    });
  };

  updateMyProduct = (id, updateValues) => {
    console.log(updateValues);
    API.updateMyProduct(id, updateValues).then(res => {
      console.log(res.data);
    });
  };

  DeleteProduct = id => {
    console.log(id);
    API.DeleteProduct(id).then(res => {
      console.log(res.data);
      this.getProducts();
    });
  };

  hexToBase64 = str => {
    return btoa(
      String.fromCharCode.apply(
        null,
        str
          .replace(/\r|\n/g, "")
          .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
          .replace(/ +$/, "")
          .split(" ")
      )
    );
  };

  image = image => {
    const img = "data:image/jpeg;base64," + this.hexToBase64(image);
    return img;
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <h1>My Products</h1>

          <div>
            {this.state.products.map(Product => (
              <ProductMain
                key={Product.ProductID}
                name={Product.Product_Name}
                price={Product.UnitPrice}
                stock={Product.Stock}
                available={Product.available}
                image={Product.Image}
                description={Product.description}
                updateProduct={() =>
                  this.updateMyProduct(
                    Product.ProductID,
                    this.updateValueFunction()
                  )
                }
                handleUpdateValueChange={this.handleUpdateValueChange}
                Product_Name={this.state.Product_Name}
                productPrice={this.state.Price}
                productStock={this.state.Stock}
                DeleteProduct={() => this.DeleteProduct(Product.ProductID)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProducts;
