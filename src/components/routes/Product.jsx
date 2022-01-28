import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductCard = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-evenly;
  height: auto;
  width: auto;
`

const ProductButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
`

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Product = ({ name, description, category, price, id, photo, user, msgAlert }) => {
  const addToCart = (id) => {
    const { token } = user

    axios.request({
      method: 'POST',
      url: `${apiUrl}/cart/add/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
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
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    textAlign: 'center'
  }

  return (
    <ProductCard>
      {user
        ? <Link style={{ color: 'black', textDecoration: 'none', textAlign: 'center', fontSize: '23px' }} to={`/product/${id}`}>{name}</Link>
        : <Link style={{ color: 'black', textDecoration: 'none', textAlign: 'center', fontSize: '23px' }} to={'/sign-in'}>{name}</Link>
      }
      <ProductImage className="photo" src={photo} />
      <h6 style={{ textAlign: 'center' }}>${price}</h6>
      {user
        ? <ProductButton onClick={() => { addToCart(id) }}>Add to cart</ProductButton>
        : <Link style={linkStyle} to='/sign-in'>Add to cart</Link>}
    </ProductCard>
  )
}

export default Product
