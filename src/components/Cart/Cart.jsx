import axios from 'axios'
import React, { useState, useEffect } from 'react'
import apiUrl from '../../apiConfig'
import CartItem from './CartItem'
import styled from 'styled-components'

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

// const Total = styled.h6`
//   background-color: black;
//   color: white;
//   padding: 10px;
//   border-radius: 10px;
// `

export const Cart = ({ user }) => {
  const [cart, setCart] = useState([])
  // const [total, setTotal] = useState(0)

  useEffect(() => {
    axios.get(apiUrl + '/cart/', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        const cartArr = response.data.cart
        setCart(cartArr)
      })
  }, [])

  useEffect(() => {
    // const priceArr = []
    console.log('calc total')
    // cart.forEach(cartItem => {
    //   priceArr.push(cartItem.price)
    // })
    console.log(cart)

    // if (priceArr.length < 0) {
    //   console.log('no prices in cart')
    // } else {
    //   const sum = priceArr.reduce((a, b) => {
    //     return a + b
    //   })
    //   const finalPrice = sum + 3.75
    //   console.log(finalPrice)
    // }
    // setTotal(finalPrice)
  }, [cart])

  const removeFromCart = (id) => {
    axios.delete(apiUrl + `/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }).then(response => {
      const cartArr = response.data.user.cart
      setCart(cartArr)
    })
  }

  const cartJsx = cart.map(product => (
    <Div key={product._id}>
      <CartItem
        name={product.name}
        price={product.price}
      />
      <Button onClick={() => { removeFromCart(product._id) }}>❌</Button>
    </Div>
  ))

  return (
    <>
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
            <h6>FREE! 🥳</h6>
            <h6>$3.75</h6>
            <h6>$303</h6>
          </SubtotalDiv>
        </SubtotalSection>
        <CheckoutSection>
          <CartButton>Continue Shopping</CartButton>
          <CartButton>Checkout</CartButton>
        </CheckoutSection>
      </Container>
    </>
  )
}
