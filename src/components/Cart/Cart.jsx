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
        console.log(cartArr)
        setCart(cartArr)
      })
  }, [])

  const removeFromCart = (id) => {
    axios.delete(apiUrl + `/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then(response => {
      const cartArr = response.data.user.cart
      console.log(cartArr)
      setCart(cartArr)
    })
  }

  const cartJsx = cart.map(product => (
    <div key={product._id}>
      <CartItem
        name={product.name}
        price={product.price}
        description={product.description}
        category={product.category}
      />
      <button onClick={() => { removeFromCart(product._id) }}>Remove from cart</button>
    </div>
  ))

  return (
    <>
      <h1>Cart</h1>
      {cartJsx}
    </>
  )
}
