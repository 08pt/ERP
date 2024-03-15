import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products/products";
import Orders from "./Pages/order";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/Products/products" element={<Products />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
