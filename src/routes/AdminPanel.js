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

  const categories = Array.from(
    new Set(medicinesState.map((item) => item.description))
  );

  return (
    <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
      <h2 style={{ marginTop: "30px" }}>Admin Panel</h2>
      <div className="my-2">
        <Button
          onClick={() => navigate(`/admin/users`)}
          variant="primary"
          style={{ marginTop: "5px", marginBottom: "20px" }}
        >
          View Users
        </Button>
        <Button
          className="mx-3"
          onClick={() => navigate(`/admin/medicine/addCategory`)}
          variant="primary"
          style={{ marginTop: "5px", marginBottom: "20px" }}
        >
          Add Category
        </Button>
      </div>
      {categories.map((category) => (
        <div key={category}>
          <h4 style={{ color: "green", fontWeight: "bold" }}>
            Category: {category}
          </h4>
          <div className="my-2">
            <Button
              onClick={() => navigate(`/admin/medicine/add/`)}
              variant="secondary"
              style={{ marginBottom: "10px" }}
            >
              Add Medicine in {category} Category
            </Button>
          </div>
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
              {medicinesState
                .filter((item) => item.description === category)
                .map((item) => (
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
                        onClick={() =>
                          navigate(`/admin/medicine/edit/${item.id}`)
                        }
                        variant="info"
                        className="mx-2"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() =>
                          navigate(`/admin/medicine/delete/${item.id}`)
                        }
                        variant="danger"
                      >
                        Disable
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
}
