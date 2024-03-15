import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import formatToINR from "../../utils/formatToINR";
import EditProducts from "./editProduct";

const ProductItem = ({ product, deleteProduct, handleEdit, updateProduct }) => {
  const { id, name, category, price } = product;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    handleEdit(product);
    setShowEditForm(true);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  return (
    <div className="product-item">
      <div className="bg-orange-100 shadow-md rounded-md p-4 transition-transform duration-300 hover:-translate-y-1">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2 font-semibold">Category: {category}</p>
        <p className="text-gray-600 mb-2">Price:{formatToINR(price)}</p>
        {/* <p className="text-gray-600 mb-2">Stock: {stock}</p> */}
        <div className="flex justify-between items-center">
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-2"
            onClick={handleEditClick}
          >
            <FaRegEdit />
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => deleteProduct(id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      {showEditForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white shadow-md rounded-md p-4">
            <EditProducts
              product={product}
              updateProduct={updateProduct}
              closeEditForm={closeEditForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
