import React from "react";
import ProductItem from "./productItem";
const ProductList = ({
  products,
  deleteProduct,
  handleEdit,
  updateProduct,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ProductList;
