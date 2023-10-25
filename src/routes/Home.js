import React, { useEffect, useState } from "react";
import { medicines } from "../utils/api";

export default function Home() {
  const [medicinesList, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    getMedicines();
  }, []);

  const getMedicines = async () => {
    const _medicines = await medicines.list();
    setMedicines(_medicines);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (type) => {
    setSortBy(type);
  };

  const filteredMedicines = medicinesList
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (sortBy === "name" ? a.name.localeCompare(b.name) : 0));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search medicines"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: "300px",
            padding: "10px",
            marginRight: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>Sort By:</span>
          <select
            onChange={(e) => handleSort(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#f2f2f2", // Background color
              color: "#333", // Text color
            }}
          >
            <option value="" style={{ padding: "10px" }}>
              None
            </option>
            <option value="name" style={{ padding: "10px" }}>
              Name
            </option>
            <option value="category" style={{ padding: "10px" }}>
              Category
            </option>
          </select>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredMedicines.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eaeaea",
              borderRadius: "5px",
              width: "250px",
              margin: "30px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h3>{item.name}</h3>
            <p>Category: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Seller: {item.seller}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
