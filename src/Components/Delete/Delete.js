import React from 'react';

const Delete = ({ items, removeFromCart }) => {
  return (
    <div>
     
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} руб.
            <button onClick={() => removeFromCart(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;