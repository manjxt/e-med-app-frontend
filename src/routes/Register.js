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
      console.log("User register error:", error);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <h2>SignUp</h2>
      <h6>Please enter credentials below.</h6>
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
          type="email"
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
          onClick={handleUserRegister}
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
