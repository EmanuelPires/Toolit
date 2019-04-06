import React from "react";

const ProductMain = props => (

  <div className="container">
    <ul>
      <li>
        <div class="card horizontal hoverable ">
          <div class="card-image">
            <img className="img-responsive" src={props.image} />
          </div>
            <div class="card-stacked">
                    <div class="card-content">
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