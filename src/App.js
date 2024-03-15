import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterAndLogin from "./Components/RegisterAndLogin.js";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./Components/Home.js";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId"/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
