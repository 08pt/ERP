import React from "react";
import { Link } from "react-router-dom";
import { mockProducts } from "../data/data";
import { mockOrders } from "../data/data";

import formatToINR from "../utils/formatToINR";

const Dashboard = () => {
  const totalProducts = mockProducts.length;
  const totalOrders = mockOrders.length;
  // Calculate total sales revenue
  const totalRevenue = mockOrders.reduce((total, order) => {
    const orderRevenue = order.products.reduce((subtotal, productId) => {
      const product = mockProducts.find((prod) => prod.id === productId);
      if (product) {
        return subtotal + product.price;
      } else {
        console.error(`Product with ID ${productId} not found`);
        return subtotal;
      }
    }, 0);
    return total + orderRevenue;
  }, 0);

  return (
    <div className="container mx-auto px-4 pt-28">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Welcome to the Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 ">
        <div className=" bg-orange-300 bg-opacity-70 hover:bg-opacity-90 rounded-lg shadow-md p-6 py-16   flex flex-col justify-center items-center transition duration-300">
          <h2 className="text-lg sm:text-xl uppercase font-semibold mb-2">
            Total Products
          </h2>
          <p className="text-gray-600 text-4xl font-bold">{totalProducts}</p>
          <Link to="/Products/products" className="mt-4">
            <button className="bg-gray-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
              View Products
            </button>
          </Link>
        </div>
        <div className="bg-blue-400 bg-opacity-70 hover:bg-opacity-90 rounded-lg shadow-md p-6 py-16 flex flex-col justify-center items-center transition duration-300">
          <h2 className="text-lg sm:text-xl uppercase font-semibold mb-2">
            Total Orders
          </h2>
          <p className="text-gray-600 text-4xl font-bold">{totalOrders}</p>
          <Link to="/order" className="mt-4">
            <button className="bg-gray-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
              View Orders
            </button>
          </Link>
        </div>
        <div className="bg-green-300 bg-opacity-70 hover:bg-opacity-90 rounded-lg shadow-md p-6 py-16 flex flex-col justify-center items-center transition duration-300">
          <h2 className="text-lg font-semibold mb-2 sm:text-xl uppercase">
            Sales Revenue
          </h2>
          <p className="text-gray-600 text-4xl font-bold">
            {formatToINR(totalRevenue.toFixed(2))}
          </p>
          <Link to="/reports/revenue" className="mt-4">
            <button className="bg-gray-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
              View Reports
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
