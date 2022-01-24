import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  height: fit-content;
  align-items: center;
  text-align: center;
  justify-items: center;
`

const CartItem = ({ name, price, id }) => {
  return (
    <Div>
      <h6>{name}</h6>
      <h6>Quantity: 1</h6>
      <h6>${price}</h6>
    </Div>
  )
}

export default CartItem
