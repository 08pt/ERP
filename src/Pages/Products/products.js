import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { mockProducts } from "../../data/data";
import AddProductForm from "./addProducts";
import ProductList from "./productList";

const Products = () => {
  const [products, setProducts] = useState(mockProducts);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddForm(false);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4  uppercase text-center pt-12">
        Products Management
      </h1>

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        handleEdit={handleEdit}
        updateProduct={updateProduct}
      />

      <button
        className="fixed bottom-4 right-4 bg-teal-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-teal-600"
        onClick={() => setShowAddForm(true)}
      >
        <FaPlus />
      </button>

      {showAddForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white shadow-md rounded-md p-4">
            <AddProductForm
              addProduct={addProduct}
              closeAddForm={closeAddForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
