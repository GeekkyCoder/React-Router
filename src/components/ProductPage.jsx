// import React from 'react'
import { useParams } from "react-router-dom";
import React, { useContext } from "react";

import { Context } from "./Context/Context";

function ProductPage() {
  const { products } = useContext(Context);
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  return (
    <div className="product-item">
      <div className="img">
      <img width={"100%"} height={"100%"} style={{objectFit:"cover"}}src={product.imgUrl} alt={`${product.name}-image`} />
      </div>
      <div className="info">
        <h2>{product.company}</h2>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price} PKR</p>
      </div>

    </div>
  );
}

export default ProductPage;
