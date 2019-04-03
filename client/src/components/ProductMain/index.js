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
                <li>Item: {props.item}</li>
                <li>Ordered: {props.OrderDate}</li>
                <li>Quantity: {props.OrderQuantity}</li>
                <li>Price: ${props.OrderCost}.00</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default ProductMain;