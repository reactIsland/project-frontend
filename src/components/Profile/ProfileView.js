import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import UserInfo from './UserInfo'
import PastOrders from './PastOrders'

const ViewContainer = styled.div`
  margin: 0 auto;
  padding: 0px;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const ProfileView = () => {
  const [component, setComponent] = useState('')

  console.log(component, setComponent)

  const linkStyle = {
    padding: '10px',
    cursor: 'pointer',
    width: '200px',
    'text-align': 'center',
    'background-color': 'black',
    color: 'white',
    border: 'none',
    outline: 'none',
    'text-decoration': 'none',
    margin: '50px'
  }

  return (
    <ViewContainer>
      <UserInfo />
      <PastOrders />
      <Link to='/change-password' style={linkStyle}>Manage Password</Link>
    </ViewContainer>
  )
}

export default ProfileView
