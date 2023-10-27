import React from "react";
import { Button, Table } from "react-bootstrap";
import { useData } from "../hooks/useData";
import { Link, useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const { order, setOrder } = useData();

  const calculateTotalPrice = () => {
    return order.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateTotalPricePerItem = (item) => {
    if (item && item.price) {
      return item.price * item.quantity;
    }
    return 0;
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h2 style={{ color: "green" }}>Order Confirmed</h2>
        <p>Thank you for your order! Your order has been confirmed.</p>
      </div>
      <div
        style={{ marginRight: "5rem", marginLeft: "5rem", marginTop: "50px" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{calculateTotalPricePerItem(item)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Total Price: {calculateTotalPrice()}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <Link to="/" className="btn btn-primary mb-3">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmed;
