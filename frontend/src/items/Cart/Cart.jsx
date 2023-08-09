import React from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Cart</h2>
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p>Amount: ${item.amount}</p>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;