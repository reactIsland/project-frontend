import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'

export const Cart = ({ user }) => {
  const [cart, setCart] = useState({})
  // const [user, setUser] = useState({})
  console.log(cart, setCart)
  useEffect(() => {
    return axios.get(apiUrl + '/cart/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }, [])

  return (
    <h1>Cart</h1>
  )
}
