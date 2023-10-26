import React from "react";
import { Button, Table } from "react-bootstrap";
import { useData } from "../hooks/useData";

const Cart = () => {
  const { cart, setCart } = useData();

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

  return (
    <div style={{ marginRight: "5rem", marginLeft: "5rem" }}>
      <h2>Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
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
      </Table>
    </div>
  );
};

export default Cart;
