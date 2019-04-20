import React from "react";

const SearchResults = props => (
  <div className="container">
    <ul>
      <li>
        <div className="card horizontal hoverable ">
          <div className="card-image">
            <img className="img-responsive" src={props.image} alt="" />
          </div>

          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{props.name}</span>
              <p>{props.description}</p>
              <ul>
                <li>Quantity: {props.stock}</li>
                <li>Available: {props.available}</li>
                <li>Price: ${props.price}</li>
              </ul>

              <div className="card-action">
              {/* <Link
              to="/myorders">
             Rent<i className="fas fa-shopping-cart" id="orders" />
            </Link> */}
                <a href="/myorders" onClick={props.NewOrder}>Rent</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default SearchResults;
