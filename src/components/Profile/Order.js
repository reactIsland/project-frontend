import React from 'react'
import styled from 'styled-components'

const DIV = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
`
const DetailsButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
`

const IMG = styled.img`
  height: 50px;
  width: 50px;
`

const Order = ({ photo, name, price, index }) => {
  return (
    <DIV>
      <h6>{index + 1}.</h6>
      <IMG src={photo}/>
      <h5>{name}</h5>
      <h5>{price}</h5>
      <DetailsButton>details</DetailsButton>
    </DIV>
  )
}

export default Order
