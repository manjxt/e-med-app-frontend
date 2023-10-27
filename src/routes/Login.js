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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <p></p>
      <p></p>
      <h2>Login</h2>
      <p></p>
      <h5>Please Login to continue.</h5>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
          }}
        />
        <button
          type="button"
          onClick={handleUserLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            cursor: "pointer",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          Login
        </button>
        <div>
          <Link
            to="/AdminLogin"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Admin Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
