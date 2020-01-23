import React from "react";

function PC(props) {
    console.log(props);
  return (
    <div>
      <img src={props.product.imgUrl} />
      <h2>Product Name:{props.product.name}</h2>
      <h4 style={{ display: !props.product.color && "none" }}>Color: {props.product.color}</h4>
      <h4>Type: {props.product.type}</h4>
    </div>
  );
}

export default PC;
