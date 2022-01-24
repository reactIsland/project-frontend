import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// use useeffect to call api to get all products
// create state products, setProducts
// once you have all products put into products state
// map all products with Product component, pass in necessary props

// const products = ({ name, description, price, category }) => {
//   const ProductJsx = Product.map([])
//   }
export const Home = (msgAlert) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl + '/products')
        console.log(res)
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
    <li key={product._id}>
      <Product
        name = {product.name}
        description = {product.description}
        category = {product.category}
        price = {product.price}
        id = {product.id}

      />
      <Link to={`/products/${product._id}`}>{product.name}</Link>
    </li>
  ))
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Products</h3>
        <ul>{productsList}</ul>
      </div>
    </div>
  )
}

console.log(Product)

export default Home
