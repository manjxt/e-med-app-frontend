import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { medicines } from "../utils/api";

export default function DeleteMedicine() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicine = async () => {
      const fetchedMedicine = await medicines.single(id);
      setMedicine(fetchedMedicine);
    };
    fetchMedicine();
  }, [id]);

  const handleDelete = async () => {
    await medicines.deleteSingle(id);
    alert("Medicine Deleted");
    navigate("/admin");
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <h2>Disable Medicine</h2>
      {medicine && (
        <div>
          <p>Are you sure you want to disable this medicine?</p>
          <p>
            <strong>Name: </strong> {medicine.name}
          </p>
          <p>
            <strong>Description: </strong> {medicine.description}
          </p>
          <p>
            <strong>Price: </strong> {medicine.price}
          </p>
          <button className="btn btn-danger me-3" onClick={handleDelete}>
            Confirm Disable
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
