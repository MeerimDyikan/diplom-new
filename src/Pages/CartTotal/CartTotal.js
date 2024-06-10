import React, { useState } from 'react';
import './CartTotal.css';

const CartTotal = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15, quantity: 2 },
    { id: 3, name: 'Item 3', price: 20, quantity: 1 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    ));
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  min="1"
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default CartTotal;
