// import axios from 'axios'
import React from 'react'
// import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SuccessContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
const OrderMsg = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: lightgray 0px 30px 90px;
  border-radius: 20px;
  padding: 30px;
`

const Success = () => {
  // useeffect to hit endpoint that will do the following:
  // 1. it will find the user
  // 2. once we have user cart we add it to user orders and save
  // 3. next clear the cart
  // 4. send back the user object

  // useEffect(() => {
  //   axios.request({
  //     url: `${apiUrl}/ordercomplete`,
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${user.token}`
  //     }
  //   })
  //     .then(response => {
  //       console.log(response)
  //     })
  // }, [])

  const linkStyle = {
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    width: '100px'
  }

  return (
    <SuccessContainer>
      <OrderMsg>
        <h1>Order Complete</h1>
        <p>Sign back in to view orders or continue shopping</p>
        <Link style={linkStyle} to='/sign-in'>Sign In</Link>
      </OrderMsg>
    </SuccessContainer>
  )
}

export default Success
