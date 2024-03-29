export const mockProducts = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    price: 599,
    stock: 100,
    image: " /smartphone.jpg",
  },
  {
    id: 2,
    name: "Men's T-shirt",
    category: "Clothing & Apparel",
    price: 29.99,
    stock: 200,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home & Kitchen",
    price: 79.99,
    stock: 50,
  },
  {
    id: 4,
    name: "Facial Cleanser",
    category: "Beauty & Personal Care",
    price: 12.5,
    stock: 150,
  },
  {
    id: 5,
    name: "The Great Gatsby (Book)",
    category: "Books & Stationery",
    price: 14.99,
    stock: 75,
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    price: 24.99,
    stock: 100,
  },
  {
    id: 7,
    name: "Board Game",
    category: "Toys & Games",
    price: 19.99,
    stock: 120,
  },
  {
    id: 8,
    name: "Multivitamin",
    category: "Health & Wellness",
    price: 29.99,
    stock: 200,
  },
];
export const mockOrders = [
  {
    id: 1,
    customer: "Ankita",
    date: "2024-03-07",
    status: "Shipped",
    products: [1, 2, 3],
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    customer: "Neeru Desai",
    date: "2024-03-06",
    status: "Delivered",
    products: [4, 5],
    paymentMethod: "PayPal",
  },
  {
    id: 3,
    customer: "Rahul Singh",
    date: "2024-03-08",
    status: "Pending",
    products: [1, 2, 5],
    paymentMethod: "PayPal",
  },
  {
    id: 4,
    customer: "Ayesha khan",
    date: "2024-03-09",
    status: "Processing",
    products: [1, 2, 5],
    paymentMethod: "PayPal",
  },
  {
    id: 5,
    customer: "Samaira",
    date: "2024-03-10",
    status: "Cancelled",
    products: [1, 2, 5],
    paymentMethod: "PayPal",
  },
  {
    id: 6,
    customer: "Nawaz",
    date: "2024-03-10",
    status: "Cancelled",
    products: [1, 2, 5],
    paymentMethod: "PayPal",
  },
];
