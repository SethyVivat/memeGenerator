import React from "react";
import PC from "./PC";
import ProductData from "./ProductData";

function Products() {
  const pypy = ProductData.map(item => <PC product={item} key={item.id}/>)
  return (
    <div>
      <h1 style={{ background: "teal", color: "white" }}>
        This is the list of products on sale in the event of BLACK FRIDAY
      </h1>
      {pypy}
    </div>
  );
}
export default Products;
