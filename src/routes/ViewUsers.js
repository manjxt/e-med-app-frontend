import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { admin } from "../utils/api";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await admin.users();
    setUsers(response);
  };

  return (
    <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
      <h2 style={{ padding: "30px" }}>ViewUsers</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>User name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewUsers;
