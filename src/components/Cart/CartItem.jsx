import React from 'react'

const CartItem = ({ name, price, description, category, id }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>productID: {id}</p>
    </div>
  )
}

export default CartItem
