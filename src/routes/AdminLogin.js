import React, { useState } from "react";
import { admin } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleUser } = useData();

  const handleAdminLogin = async () => {
    try {
      const payload = { userName: username, email, password };
      const response = await admin.login(payload);
      console.log(response);
      handleUser(response);
      navigate("/admin");
    } catch (error) {
      console.log("Admin login error:", error);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "50vh" }}
    >
      <h2>Admin Login</h2>
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
          onClick={handleAdminLogin}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
