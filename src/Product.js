import React from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>title</p>
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
