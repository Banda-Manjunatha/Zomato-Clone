import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateRestaurent from "./Components/CreateReastaurent";
import GetApp from "./Components/GetApp.js";
import AtpRestaurent from "./Components/AtpRestaurent.js";
import RegisterAndLogin from "./Components/RegisterAndLogin.js";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobile" element={<GetApp />} />
          <Route path="/partner-with-us" element={<CreateRestaurent />} />
          <Route path="/anantapur" element={<AtpRestaurent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
