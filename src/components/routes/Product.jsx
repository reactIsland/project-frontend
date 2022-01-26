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
  // outline: none;
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  // padding: 10px;
  // border-radius: 10px;
  // border: none;
  // background-color: white;
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

// const ProductLink = styled.link`
//   outline: none;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//   padding: 10px;
//   background-color: white;
//   border-radius: 10px;
//   border: none;
// `

const Product = ({ name, description, category, price, id, photo, user, msgAlert }) => {
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
    // textDecoration: 'none',
    // color: 'black',
    // padding: '10px',
    // borderRadius: '10px',
    // boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    // border: 'none',
    // margin: '0 auto'
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
