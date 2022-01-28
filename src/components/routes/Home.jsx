import React, { useEffect, useState } from 'react'
import Product from './Product'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import styled from 'styled-components'

const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 50px;
  padding-left: 50px;
  margin: 0 auto;
`

const ProductsContainer = styled.div`
  display: flex;
  height: auto;
  width: 75%;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 0 auto;
`
const ProductCard = styled.div`
  margin: 10px;
  background-color: white;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
`

const H1 = styled.h1`
  padding: 10px;
  margin-top: 50px;
`

export const Home = ({ msgAlert, user }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl + '/products')
        setProducts(res.data.products)
      } catch (error) {
        msgAlert({
          heading: 'Products List failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])
  const productsList = products.map(product => (
    <ProductCard key={product._id}>
      <Product
        photo = {product.photo}
        name = {product.name}
        description = {product.description}
        category = {product.category}
        price = {product.price}
        id = {product._id}
        user={user}
        msgAlert={msgAlert}
      />
    </ProductCard>
  ))
  return (
    <ViewContainer>
      <H1>Products</H1>
      <ProductsContainer>
        {productsList}
      </ProductsContainer>
    </ViewContainer>
  )
}

export default Home
