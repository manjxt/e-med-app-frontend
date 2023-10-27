import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { medicines } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [medicinesState, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMedicines();
  }, []);

  const getMedicines = async () => {
    const _medicines = await medicines.list();
    setMedicines(_medicines);
  };

  return (
    <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
      <h2>Admin Panel</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Seller</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicinesState.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.seller}</td>
              <td>{item.price}</td>
              <td>
                <Button
                  onClick={() => navigate(`/admin/medicine/edit/${item.id}`)}
                  variant="info"
                  className="mx-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => navigate(`/admin/medicine/delete/${item.id}`)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
