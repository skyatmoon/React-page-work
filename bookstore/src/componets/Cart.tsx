import React from 'react';

interface CartProps {
  cart: { id: number, title: string }[];
  onRemoveFromCart: (bookId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;