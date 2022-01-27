import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Order from './Order'
// import { Link } from 'react-router-dom'

const ViewContainer = styled.div`
  margin: 0 auto;
  padding: 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
`
const OrderCard = styled.div`
  margin: 10px;
  background-color: white;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
`

const H1 = styled.div`
  padding: 10px;
  font-size: 45px;
`

const PastOrders = ({ user }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.request({
      url: `${apiUrl}/orders`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        const allOrders = response.data.user.orders
        setOrders(allOrders)
      })
  }, [])

  const ordersList = orders.map((order, index) => (
    <OrderCard key={order._id}>
      <Order
        index = {index}
        photo = {order.photo}
        name = {order.name}
        price = {order.price}
      />
    </OrderCard>
  ))

  return (
    <ViewContainer>
      <H1>Orders</H1>
      {ordersList}
    </ViewContainer>
  )
}

export default PastOrders
