import React, { Component } from "react";
import ProductMain from "../components/ProductMain";
import Product from "../product.json";
// import "./style.css";

class MyProducts extends Component {
  state = {
    product: Product
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>My Products</h1>

          <div>
            {this.state.product.map(Product => (
              <ProductMain
                key={Product.id}
                name={Product.name}
                supplier={Product.supplier}
                price={Product.price}
                stock={Product.stock}
                available={Product.available}
                image={Product.image}
                description={Product.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProducts;
