import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../routes/Login";
import RegisterPage from "../routes/Register";
import { useData } from "../hooks";
import { RiShoppingCartLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f2f2f2",
  padding: "20px 20px",
};

const linkStyle = {
  color: "#333",
  textDecoration: "none",
  padding: "0 10px",
};

const brandStyle = {
  fontWeight: "bold", // Added this line to make the text bold
};

const padStyle = {};

const Navbar = () => {
  const { user, cart, handleUser } = useData();

  let quantity = 0;
  cart.forEach((item) => {
    quantity += item.quantity;
  });

  return (
    <div style={navbarStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, ...brandStyle }}>
          Medify
        </Link>
      </div>
      {user ? (
        <div>
          <Link aria-disabled="true" style={{ ...linkStyle }}>
            Welcome, {user.userName}!
          </Link>
          {user.userName !== "admin" ? (
            cart && cart.length > 0 ? (
              <Link
                to="/cart"
                style={{ ...linkStyle, paddingRight: "10px" }}
                className="position-relative"
              >
                <RiShoppingCartLine />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {quantity.toString()}
                </span>
              </Link>
            ) : (
              <Link to="/cart" style={linkStyle}>
                <RiShoppingCartLine />
              </Link>
            )
          ) : (
            <Link to="/admin" style={{ linkStyle, color: "green" }}>
              Admin Panel
            </Link>
          )}

          <button
            className="btn btn-link"
            onClick={() => {
              handleUser(null);
              alert("Logged out!");
            }}
            style={{
              ...linkStyle,
              color: "red",
              paddingLeft: "10px",
              marginBottom: "5px",
            }}
          >
            Logout
          </button>
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
