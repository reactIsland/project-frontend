import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    {/* <NavLink to='/change-password' className='nav-link'>Change Password</NavLink> */}
    <NavLink to='/profile' className='nav-link'>Profile</NavLink>
    <NavLink to='/cart' className='nav-link' exact>Cart </NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink to='/Home' className='nav-link' exact>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='p-4' bg='dark' variant='dark' expand='md'>
    <Container className='w-75'>
      <Navbar.Brand>
        <Link to='/Home' style={{ color: '#FFF', textDecoration: 'none' }}>GoLocal 🥕</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {/* {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )} */}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
