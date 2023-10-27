import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { medicines } from "../utils/api";

export default function EditMedicine() {
  const { id } = useParams();
  console.log("id", id);
  const [medicine, setMedicine] = useState({
    imageUrl: "",
    name: "",
    description: "",
    seller: "",
    price: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicine = async () => {
      const fetchedMedicine = await medicines.single(id);
      setMedicine(fetchedMedicine);
    };
    fetchMedicine();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await medicines.edit(id, medicine);
    alert("Edited successfully.");
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image Url:</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={medicine.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={medicine.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={medicine.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Seller:</label>
          <input
            type="text"
            className="form-control"
            name="seller"
            value={medicine.seller}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={medicine.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}
