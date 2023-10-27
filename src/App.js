import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import AdminLogin from "./routes/AdminLogin";
import Cart from "./routes/Cart";
import { DataProvider } from "./hooks";
import AdminPanel from "./routes/AdminPanel";
import EditMedicine from "./routes/EditMedicine";
import DeleteMedicine from "./routes/DeleteMedicine";
import AddMedicine from "./routes/AddMedicine";
import OrderConfirmed from "./routes/OrderConfirmed";
import AddCategory from "./routes/AddCategory";

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
            <Route path="/orderconfirmed" element={<OrderConfirmed />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/medicine/edit/:id" element={<EditMedicine />} />
            <Route path="/admin/medicine/add" element={<AddMedicine />} />
            <Route
              path="/admin/medicine/addCategory"
              element={<AddCategory />}
            />
            <Route
              path="/admin/medicine/delete/:id"
              element={<DeleteMedicine />}
            />
          </Routes>
          {/* <Home /> */}
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
