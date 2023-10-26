import React, { useState } from "react";
import { useData } from "../hooks";
import { user } from "../utils/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleUser } = useData();

  const handleUserRegister = async () => {
    try {
      const payload = { userName: username, email, password };
      const response = await user.register(payload);
      console.log(response); // Handle the response from the backend here
      handleUser(response);
      navigate("/");
    } catch (error) {
      console.log("User register <erro></erro>r:", error);
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
      <h2>SignUp</h2>
      <h1>Please SignUp to continue.</h1>
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
          type="email"
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
          onClick={handleUserRegister}
          style={{
            padding: "10px",
            backgroundColor: "lightblue",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
