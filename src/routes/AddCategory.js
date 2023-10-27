import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { medicines } from "../utils/api";
import { Button } from "react-bootstrap";

export default function AddCategory() {
  const [medicine, setMedicine] = useState({
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await medicines.add(medicine);
    alert("Added successfully.");
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={medicine.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Category
        </button>
        <div className="my-2">
          <Button
            onClick={() => navigate(`/admin/medicine/add`)}
            variant="secondary"
          >
            Add Medicine in Category
          </Button>
        </div>
      </form>
    </div>
  );
}
