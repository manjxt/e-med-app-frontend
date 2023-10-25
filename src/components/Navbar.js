// // Navbar.js
import React from "react";

const Navbar = () => {
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

  return (
    <div style={navbarStyle}>
      <div>
        {/* <h3>E-Med</h3> */}
        <a href="/" style={{ ...linkStyle, ...brandStyle }}>
          E-Med
        </a>
        <a href="/" style={linkStyle}>
          Home
        </a>
      </div>
      <div>
        <a href="/login" style={linkStyle}>
          Login
        </a>
        <a href="/signup" style={linkStyle}>
          Signup
        </a>
      </div>
    </div>
  );
};

export default Navbar;
