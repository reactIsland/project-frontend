import React from 'react'
import styled from 'styled-components'

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

const PastOrders = () => {
  return (
    <HomeContainer>
      <h1>Past Orders</h1>
      <InfoContainer>make api call for order data (stripe route)</InfoContainer>
    </HomeContainer>
  )
}

export default PastOrders
