import React from 'react'
import Link from 'react-router-dom'

const products = 1
const productsList = products.map(product => (
  <li key={product._id}>
    <Link to={`/products/${product._id}`}> {product.name} </Link>
  </li>
))

console.log(productsList)
console.log(products)
