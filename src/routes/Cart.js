import React from "react";
import { Button, Table } from "react-bootstrap";
import { useData } from "../hooks/useData";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, setOrder } = useData();
  const navigate = useNavigate();

  // const fetchCarts = async () => {
  //   const result = await cart.getCarts();
  //   console.log("carts", carts);
  //   setCarts(result);
  // };

  const removeItemFromCart = async (cartId, itemId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Remove the item completely from the cart
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(updatedCart);
    // await cart.removeItemFromCart(cartId, itemId);
    // fetchCarts();
  };

  // useEffect(() => {
  //   fetchCarts();
  // }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateTotalPricePerItem = (item) => {
    if (item && item.price) {
      return item.price * item.quantity;
    }
    return 0;
  };

  const handleOrderCOnfirm = () => {
    setOrder(cart);
    navigate("/OrderConfirmed");
    setCart([]);
  };

  return (
    <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
      <h2 style={{ padding: "30px" }}>Cart</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{calculateTotalPricePerItem(item)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => removeItemFromCart(cart.id, item.id)}
                >
                  Remove Item
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="4"
              style={{ textAlign: "left", fontWeight: "bold", color: "green" }}
            >
              Total Price: {calculateTotalPrice()}
            </td>
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Button
          onClick={handleOrderCOnfirm}
          className="btn btn-success mb-3 w-50"
        >
          Confirm Order
        </Button>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Link to="/" className="btn btn-info mb-3 w-50">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
