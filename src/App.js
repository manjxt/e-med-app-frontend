import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import AdminLogin from "./routes/AdminLogin";
import Cart from "./routes/Cart";
import { DataProvider } from "./hooks";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <Home /> */}
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
