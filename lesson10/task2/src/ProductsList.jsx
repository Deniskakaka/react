import React from 'react';

function ProductsList({ cartItems }) {
    const total = cartItems.reduce(
      (acc, {price}) => acc + price,
      0,
    );

  return (
    <div>
      <ul>
        {cartItems.map (({id, name, price}) =>{
          return ( 
            <li key={id} className="products__list-item">
                <span className="products__item-name">{name}</span>
                <span className="products__item-price">{`$${price}`}</span>
            </li>
          )
        })}
      </ul> 
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  )
}

export default ProductsList;