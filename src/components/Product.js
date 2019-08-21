import React from "react";
import "../styles/Product.css";

const Product = props => {
  return (
    <article className="product">
      <h1>{props.id}</h1>
    </article>
  );
};

export default Product;
