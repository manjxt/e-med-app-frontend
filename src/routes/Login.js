import React, { useState } from "react";
import { user } from "../utils/api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = async () => {
    try {
      const payload = { username, password };
      const response = await user.login(payload);
      console.log(response); // Handle the response from the backend here
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
        height: "100vh",
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
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
            padding: "10px",
            backgroundColor: "lightblue",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
