import React from "react";

const ProductMain = props => (

  <div className="container">
    <ul>
      <li>
        <div className="card horizontal hoverable ">
          <div className="card-image">
            <img className="img-responsive" src={props.image} />
          </div>
            <div className="card-stacked">
                    <div className="card-content">
                    <ul>
                        <li><strong>Product Name:</strong> {props.name}</li>
                        <li><strong>Owner       :</strong> {props.supplier}</li>
                        <li><strong>price       :</strong> ${props.price}</li>
                        <li><strong>stock       :</strong> {props.stock}</li>
                        <li><strong>Availability:</strong> {props.available}</li>
                        <li>{props.description}</li>
                    </ul>
                    </div>
            </div>
        </div>
      </li>
    </ul>
  </div>
);

export default ProductMain;