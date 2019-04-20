import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ProductMain from "../components/ProductMain";
import GooglePlaceInput from "../components/GooglePlaceInput";
import GoogePlaceInputOnPage from "../components/GooglePlaceInputOnPage";
import GooglePlacesSuggest from "react-google-places-suggest";
import API from "../utils/API";

import { Modal, Button } from "react-materialize";
import GooglePlaceInputOnPage from "../components/GooglePlaceInputOnPage";
import {storage} from '../Firebase'; 

const MY_API_KEY = "AIzaSyB_aSR45DHCAraJSCrm20csNj_X4LG6410";


const trigger = <Button>Open Modal</Button>;
// import "./style.css";

class MyProducts extends Component {
  state = {
    user: 1,
    products: [],
    Product_Name: "",
    Price: "",
    Stock: "",
    Availability: "",
    Image: "",
    value: "",
    search: "",
    placeID: "",
    imageurl: '',
    progress: 0
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
      UnitPrice: this.state.Price,
      Stock: this.state.Stock,
      placeID: this.state.placeID
    };
    return updateValues;
  };

  placeIDFunction = id => {
    this.setState({ placeID: id });
    console.log(this.state.placeID);
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
      this.getProducts();
    });
  };

  addNewProduct = () => {
    const object = {
      Product_Name: this.state.Product_Name,
      UnitPrice: this.state.Price,
      Stock: this.state.Stock,
      Availability: this.state.Availability,
      ProductPlaceID: this.state.placeID,
      Image: this.state.Image
    };

    console.log(object);
    // API.AddProduct(object).then(res => {
    //   console.log(res.data);
    //   this.getProducts();
    // });
  };

  DeleteProduct = id => {
    console.log(id);
    API.DeleteProduct(id).then(res => {
      console.log(res.data);
      this.getProducts();
    });
  };

  image = image => {
    console.log(image);
    var base64String = btoa(
      String.fromCharCode.apply(null, new Uint8Array(image.data))
    );
    const img = "data:image/jpeg;base64," + base64String;

    return img;
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


  handleChange = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
    debugger;
  };


  handleUpload = (e) => {
    e.preventDefault();
    const {image} = this.state;
    const name = image.name+"_"+Date.now();
    console.log(name); 
    const uploadTask = storage.ref(`images/${name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('images').child(name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({imageurl: url});
      })
      debugger;
  });

};

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <h1>My Products</h1>
          <Modal
            header="Product Update"
            trigger={<Button>Add an Item</Button>}
            actions={
              <Button className="updateButton" onClick={this.addNewProduct}>
                Add Your Item
              </Button>
            }
          >
            <form>
              Product_Name: <br />
              <input
                type="text"
                onChange={this.handleUpdateValueChange}
                name="Product_Name"
              />
              UnitPrice: <br />
              <input
                type="text"
                name="Price"
                onChange={this.handleUpdateValueChange}
              />
              Stock: <br />
              <input
                type="text"
                name="Stock"
                onChange={this.handleUpdateValueChange}
              />
              Availability: <br />
              <input
                type="text"
                name="Availability"
                onChange={this.handleUpdateValueChange}
              />
              Location: <br />
              <GooglePlaceInputOnPage placeID={this.placeIDFunction} />
              Upload Image: <br />
              <input
                type="file"
                name="Image"
                onChange={this.handleUpdateValueChange}
              />
            </form>
          </Modal>
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
                placeIDFunction={this.placeIDFunction}
                googleinput={this.state.googleinput}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProducts;