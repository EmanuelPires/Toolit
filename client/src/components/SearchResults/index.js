import React from "react";

const SearchResults = props => (
  <div className="container">
    <ul>
      <li>
        <div class="card horizontal hoverable ">
          <div class="card-image">
            <img className="img-responsive" src={props.image} alt="" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <ul>
                <li>Item: {props.name}</li>

                <li>Quantity: {props.stock}</li>
                <li>Available: {props.available}</li>
                <li>Price: ${props.price}</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default SearchResults;
