import React from "react";
import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { Cart } from "./components/Cart/Cart";

function App() {
  const auth = useSelector((state) => state.user.auth);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
