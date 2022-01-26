import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const HomeContainer = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const InfoContainer = styled.div`
  margin: 0px;
  padding: 0px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 80%;
  height: 200px;
  border: 1px solid black;
`

const PastOrders = ({ user }) => {
  const [orders, setOrders] = useState({})

  console.log(orders)
  console.log(setOrders)

  useEffect(() => {
    console.log('get orders')
    axios.request({
      method: 'GET',
      url: `${apiUrl}/orders`,
      headers: {
        Authorization: 'Bearer token'
      }
    })
      .then(response => {
        console.log(response)
      })
  }, [])

  return (
    <HomeContainer>
      <h1>Past Orders</h1>
      <InfoContainer>make api call for order data (stripe route)</InfoContainer>
    </HomeContainer>
  )
}

export default PastOrders
