import React from 'react';

function ProductsList({ cartItems }) {
  let total = 0;
  const items = cartItems.map(({ id, name, price }) => {
    total += price;
    return (
      <li key={id} className="products__list-item">
        <span className="products__item-name">{name}</span>
        <span className="products__item-price">{`$${price}`}</span>
      </li>
    )
  });

  return (

    <div className="products">
      <ul className="products__list">
        {items}
      </ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
}

export default ProductsList;