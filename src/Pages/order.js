import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { mockOrders } from "../data/data";

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  const updateOrderStatus = () => {
    if (selectedOrder && newStatus.trim() !== "") {
      setOrders(
        orders.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, status: newStatus }
            : order
        )
      );
      setSelectedOrder(null);
      setNewStatus("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center uppercase pt-16">
        Orders Management
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-green-100 shadow-md rounded-md p-4 hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div className="mb-2">
              <p className="font-semibold">Order ID: {order.id}</p>
              <p>Customer: {order.customer}</p>
              <p>Date: {order.date}</p>
              <p>Status: {order.status}</p>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mr-2"
                onClick={() => viewOrderDetails(order)}
              >
                <FaRegEdit />
              </button>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => deleteOrder(order.id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Order Details */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-4 rounded-md shadow-md max-w-md w-full mx-4">
            <h2 className="text-lg font-semibold mb-2 justify-center text-center">
              Order Details
            </h2>
            <p>
              <span className="font-semibold">Order ID:</span>
              {selectedOrder.id}
            </p>
            <p>
              <span className="font-semibold">Customer:</span>
              {selectedOrder.customer}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {selectedOrder.date}
            </p>
            <p>
              <span className="font-semibold">Status:</span>
              {selectedOrder.status}
            </p>
            <div className="mt-2 justify-center text-center ">
              <input
                type="text"
                placeholder="New Status"
                className="border p-2 rounded-md w-full"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              />
              <button
                className="mt-2 mx-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 w-[10rem]"
                onClick={updateOrderStatus}
              >
                Update Status
              </button>

              <button
                className="mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 w-[10rem]"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
