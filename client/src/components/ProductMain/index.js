import React from "react";
import { Modal, Button } from "react-materialize";

import GooglePlaceInput from "../GooglePlaceInput";

// const getValues = () => {
//   document
//     .getElementsByClassName("updateButton")
//     .addEventListener("click", function() {
//       console.log("value update was clicked");
//     });
// };

// function updateValues() {
//   const Product_Name = document.getElementsByClassName("Product_Name");
//   const UnitPrice = document.getElementsByClassName("UnitPrice");
//   const Stock = document.getElementsByClassName("Stock");
//   const values = Product_Name + " " + UnitPrice + " " + Stock;
//   console.log(values);
// }
const ProductMain = props => (
  <div className="container">
    <ul>
      <li>
        <div className="card horizontal hoverable ">
          <div className="card-image">
            <img
              className="img-responsive"
              src={props.image}
              width="100px"
              height="100px"
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <ul>
                <li>
                  <strong>Product Name:</strong> {props.name}
                </li>
                <li>
                  <strong>price :</strong> ${props.price}
                </li>
                <li>
                  <strong>stock :</strong> {props.stock}
                </li>
                <li>
                  <strong>Availability:</strong> {props.available}
                </li>
                <li>{props.description}</li>
              </ul>
            </div>
          </div>
          <div className="card-action">
            <Modal
              header="Product Update"
              trigger={<Button>Update</Button>}
              actions={
                <Button
                  onClick={props.updateProduct}
                  className="updateButton"
                  modal="close"
                >
                  Update Your Item
                </Button>
              }
            >
              <form>
                Product_Name: <br />
                <input
                  type="text"
                  onChange={props.handleUpdateValueChange}
                  name="Product_Name"
                />
                UnitPrice: <br />
                <input
                  type="text"
                  name="Price"
                  onChange={props.handleUpdateValueChange}
                />
                Stock: <br />
                <input
                  type="text"
                  name="Stock"
                  onChange={props.handleUpdateValueChange}
                />
                Location: <br />
                <GooglePlaceInput
                  googleinput={props.googleinput}
                  placeIDFunction={props.placeIDFunction}
                />
              </form>
            </Modal>
          </div>
          <div className="card-action">
            <Button onClick={props.DeleteProduct}>Delete</Button>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default ProductMain;