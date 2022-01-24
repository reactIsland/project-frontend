import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const CartItem = ({ user, name, price, description, category, id }) => {
  const removeFromCart = (productId) => {
    axios.delete(apiUrl + `/cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>productID: {id}</p>
      <button onClick={removeFromCart(id)}>Remove from cart</button>
    </div>
  )
}

export default CartItem
