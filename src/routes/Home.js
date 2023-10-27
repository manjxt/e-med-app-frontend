import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import { medicines } from "../utils/api";

export default function Home() {
  const [medicinesList, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { user, cart, setCart } = useData();

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

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const renderItem = (item) => {
    const inCart = cart.find((_item) => _item.id === item.id);

    return (
      <div
        key={item.id}
        className="card m-3"
        style={{
          width: "18rem",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card-img-top"
          style={{
            objectFit: "contain",
            maxHeight: "220px",
            //marginTop: "5px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ padding: "5px" }}>
            {item.name}
          </h5>
          <p className="card-text">Category: {item.description}</p>
          <p className="card-text">Price: {item.price}</p>
          <p className="card-text">Seller: {item.seller}</p>
        </div>
        {user && (
          <div className="card-body">
            <button
              type="button"
              onClick={() => addToCart(item)}
              className="btn btn-primary mb-3"
            >
              {inCart ? `x${inCart.quantity} in Cart` : "Add to Cart"}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#c8e6c9", minHeight: "100vh" }}>
      {/* <div className="text-left">
        <h2
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "36px",
            padding: "30px",
          }}
        >
          Welcome to Medify!
        </h2>
      </div> */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search medicines"
          value={searchTerm}
          onChange={handleSearch}
          className="form-control w-25 me-3"
          style={{ marginTop: "40px" }}
        />
        <div
          className="d-flex align-items-center"
          style={{ marginTop: "40px" }}
        >
          <span className="me-2">SortBy:</span>
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="form-select"
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredMedicines.map(renderItem)}
      </div>
    </div>
  );
}
