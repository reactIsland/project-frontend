import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import CartItem from './CartItem'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 50px;
  padding-left: 50px;
  margin: 0 auto;
`

const Button = styled.button`
outline: none;
background-color: gray;
background-color: transparent;
cursor: pointer;
border: none;
`

const Div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: auto;
width: 100%;
padding: 15px;
`

const H1 = styled.h1`
padding: 10px;
margin-top: 50px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px;
height: auto;
`

const CartSection = styled.div`
background-color: #ebf9ff;
margin: 10px auto;
width: 100%;
padding: 10px;
border-radius: 10px;
`

const SubtotalSection = styled.div`
background-color: #ebf9ff;
margin: 10px auto;
width: 100%;
height: auto;
padding: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;
`

const SubtotalDiv = styled.div`
padding: 15px;
`

const CartButton = styled.button`
padding: 10px;
background-color: black;
color: white;
border: none;
outline: none;
`

const CheckoutSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
background-color: transparent;
padding-top: 15px
`

export const Cart = ({ user }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    axios.get(apiUrl + '/cart/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        const cartArr = response.data.cart
        setCart(cartArr)
        const itemTotalWithTax = response.data.totalCartCost + 3.75
        setTotal(itemTotalWithTax)
      })
  }, [])

  const removeFromCart = (id) => {
    axios.delete(apiUrl + `/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then(response => {
      const cartArr = response.data.user.cart
      setCart(cartArr)
      const itemTotalWithTax = response.data.totalCartCost + 3.75
      setTotal(itemTotalWithTax)
    })
  }

  const checkoutWithStripe = () => {
    axios.request({
      method: 'POST',
      url: `${apiUrl}/create-checkout-session`,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        return response
      })
      .then(response => {
        const url = response.data.session.url
        window.location = url
      })
  }

  const cartJsx = cart.map(product => (
    <Div key={product._id}>
      <CartItem
        name={product.name}
        price={product.price}
      />
      <Button onClick={() => { removeFromCart(product._id) }}>???</Button>
    </Div>
  ))

  const linkStyle = {
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    outline: 'none',
    textDecoration: 'none'
  }

  return (
    <ViewContainer>
      <H1>Shopping Cart</H1>
      <Container>
        <CartSection>
          {cartJsx}
        </CartSection>
        <SubtotalSection>
          <SubtotalDiv>
            <h6>Shipping:</h6>
            <h6>Tax:</h6>
            <h6>Total:</h6>
          </SubtotalDiv>
          <SubtotalDiv>
            <h6>FREE! ????</h6>
            <h6>$3.75</h6>
            <h6>${total}</h6>
          </SubtotalDiv>
        </SubtotalSection>
        <CheckoutSection>
          <Link style={linkStyle} to='/Home'>Continue Shopping</Link>
          <CartButton onClick={() => checkoutWithStripe()}>Checkout</CartButton>
        </CheckoutSection>
      </Container>
    </ViewContainer>
  )
}
