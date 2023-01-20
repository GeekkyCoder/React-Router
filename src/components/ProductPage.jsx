// import React from 'react'
import { useParams } from "react-router-dom";
import React, { useContext } from "react";

import { Consumer } from "./Context/useContext";

function ProductPage() {
  const { productItems } = useContext(Consumer);
  const { id } = useParams();
  const product = productItems.find((item) => item.id === Number(id));

  return (
    <div className="product-item">
      <img src={product.imgUrl} alt={`${product.name}-image`} />
      <div className="info">
        <h2>{product.company}</h2>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{name}</p>
      </div>

    </div>
  );
}

export default ProductPage;
