import apiUrl from '../apiConfig'
import axios from 'axios'

// create

export const createProduct = (user, name, description, price, category) => {
  return axios.post(
    `${apiUrl}/products`,
    { product: { name, description, price, category } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// show by ID
export const showProduct = (id, user) => {
  return axios.get(
    `${apiUrl}/products/${id}/`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}

// INDEX Products
export const indexProducts = (user) => {
  return axios.get(apiUrl + '/products/',
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// UPDATE Product
export const updateProduct = (user, id, name, description, price, category) => {
  return axios.patch(
    `${apiUrl}/products/${id}`,
    { product: { name, description, price, category } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// DELETE Product
export const deleteProduct = (id, user) => {
  return axios.delete(`${apiUrl}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
