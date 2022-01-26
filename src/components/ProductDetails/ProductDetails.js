import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  outline: none;
`

const Container = styled.div`
  display: flex;
  
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  width: 50vw;
  height: auto;
  margin-bottom: 20px;
  margin-left: 175px;
  margin-top: 100px;
`
const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  border-left: 1px solid black;
`

const H6 = styled.h6`
  padding: 10px;
`

const H1 = styled.div`
  padding: 10px;
  font-size: 45px;
`
const DetailsImage = styled.img`
  width: 350px;
  height: 350px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ProductDetails = ({ user, msgAlert }) => {
  const [product, setProduct] = useState({})
  console.log('Kill tony')
  const url = window.location.pathname
  const id = url.split('/')[3]

  useEffect(() => {
    axios.request({
      method: 'GET',
      url: `${apiUrl}/products/${id}`,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(response => {
        console.log(response)
        const responseData = response.data.product
        setProduct(responseData)
      })
  }, [])

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
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    width: '100px'
  }

  return (
    <Container>
      <Link style={linkStyle} to='/Home'>Back</Link>
      <DetailsContainer>
        <div>
          <DetailsImage className="detail-photo" src={product.photo} />
        </div>
        <DetailsCard>
          <H1>{product.name}</H1>
          <H6>{product.category}</H6>
          <H6>{product.description}</H6>
          <H6>${product.price}</H6>
          <H6>{'⭐️⭐️⭐️⭐️⭐️ 45 Reviews'}</H6>
          <CartButton onClick={() => { addToCart(id) }}>Add To Cart</CartButton>
        </DetailsCard>
      </DetailsContainer>
    </Container>
  )
}

export default ProductDetails
