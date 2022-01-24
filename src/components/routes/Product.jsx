import React from 'react'

const Product = ({ name, description, category, price, id }) => {
  const addToCart = (id) => {
    console.log('Click')
  }
  return (
    <>
      <p> {name} </p>
      <p>Description: { description} </p>
      <p>Category: {category} </p>
      <p>{price} </p>
      <button onClick={addToCart}>Add to cart</button>
    </>
  )
}

export default Product
