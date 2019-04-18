import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProductMain from "../components/ProductMain";

import API from "../utils/API";

import { Modal, Button } from "react-materialize";

const trigger = <Button>Open Modal</Button>;
// import "./style.css";

class MyProducts extends Component {
  state = {
    user: 1,
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

  encode = (arrayBuffer) => {
    var base64    = ''
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  
    var bytes         = new Uint8Array(arrayBuffer)
    var byteLength    = bytes.byteLength
    var byteRemainder = byteLength % 3
    var mainLength    = byteLength - byteRemainder
  
    var a, b, c, d
    var chunk
  
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
      d = chunk & 63               // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
  
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
  
      base64 += encodings[a] + encodings[b] + '=='
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
  
      a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
  
      base64 += encodings[a] + encodings[b] + encodings[c] + '='
    }
    
    return base64
  }

  image = image => {
    debugger
    var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(image.data)));
    const img = "data:image/png;base64," + base64String;
    console.log(img); 
    return img
    
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
                image={this.image(Product.Image)}
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
