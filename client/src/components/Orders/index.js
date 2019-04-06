import React from "react";

const Orders = props => (
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

export default Orders;
