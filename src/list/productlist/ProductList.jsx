import React from "react";
import ProductDetailsCard from "../../components/productdetailscard/ProductDetailsCard";

const ProductList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <ProductDetailsCard blog={blog}/>
      ))}
    </div>
  );
};

export default ProductList;
