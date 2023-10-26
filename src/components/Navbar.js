import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../routes/Login";
import RegisterPage from "../routes/Register";
import { useData } from "../hooks";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f2f2f2",
  padding: "20px 20px",
  marginBottom: "30px",
};

const linkStyle = {
  color: "#333",
  textDecoration: "none",
  padding: "0 10px",
};

const brandStyle = {
  fontWeight: "bold", // Added this line to make the text bold
};

const Navbar = () => {
  const { user } = useData();

  return (
    <div style={navbarStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, ...brandStyle }}>
          E-Med
        </Link>
      </div>
      {user ? (
        <div>
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
          <Link
            aria-disabled="true"
            style={{ ...linkStyle, fontWeight: "bold" }}
          >
            {user.userName}
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
          <Link to="/register" style={linkStyle}>
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
