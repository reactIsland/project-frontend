import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import CartItem from './CartItem'

export const Cart = ({ user }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get(apiUrl + '/cart/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        const cartArr = response.data.cart
        console.log(response.data)
        console.log(typeof cartArr)
        console.log(cartArr)
        setCart(cartArr)
      })
  }, [])

  const cartJsx = cart.map(product => (
    <CartItem
      name={product.name}
      price={product.price}
      description={product.description}
      category={product.category}
      key={product._id}
      id={product._id}
      user={user}
    />
  ))

  return (
    <>
      <h1>Cart</h1>
      {cartJsx}
    </>
  )
}
