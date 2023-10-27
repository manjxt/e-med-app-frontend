import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../hooks";
import { user } from "../utils/api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleUser } = useData();

  const handleUserLogin = async () => {
    try {
      const payload = { userName: username, email, password };
      const response = await user.login(payload);
      console.log(response);
      handleUser(response);
      navigate("/");
    } catch (error) {
      console.log("User login error:", error);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <p></p>
      <h2 style={{ marginTop: "100px" }}>Login</h2>
      <h6>Please Login to continue.</h6>
      <p></p>
      <form className="d-flex flex-column w-50">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button
          type="button"
          onClick={handleUserLogin}
          className="btn btn-primary mb-3"
        >
          Login
        </button>
        <Link to="/AdminLogin" className="btn btn-secondary mb-3">
          Admin Login
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
