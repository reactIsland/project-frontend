import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductCard = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`

const ProductButton = styled.button`
  outline: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  border: none;
`

// const ProductLink = styled.link`
//   outline: none;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//   padding: 10px;
//   background-color: white;
//   border-radius: 10px;
//   border: none;
// `

const Product = ({ name, description, category, price, id, user, msgAlert }) => {
  const addToCart = (id) => {
    console.log(id)
    const { token } = user
    console.log(token)

    axios.request({
      method: 'POST',
      url: `${apiUrl}/cart/add/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response)
      })
      .then(() =>
        msgAlert({
          heading: '🎊  item added  🎉',
          message: '',
          variant: 'success'
        })
      )
  }

  const linkStyle = {
    'text-decoration': 'none',
    color: 'black',
    padding: '10px',
    'border-radius': '10px',
    'box-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    border: 'none'
  }

  return (
    <ProductCard>
      <Link style={{ color: 'black', 'text-decoration': 'none', 'text-align': 'center', 'font-size': '23px' }} to={`/products/${id}`}>{name}</Link>
      {/* <h6>Description: {description}</h6>
      <h6p>Category: {category}</h6p> */}
      <div>
        <h6 style={{ 'text-align': 'center' }}>Price: ${price}</h6>
        {user
          ? <ProductButton onClick={() => { addToCart(id) }}>Add to cart</ProductButton>
          : <Link style={linkStyle} to='/sign-in'>Add to cart</Link>}
      </div>
    </ProductCard>
  )
}

export default Product
