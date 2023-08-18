import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
      <h1>Product List</h1>
      <Link to="/"> <h3>Home</h3> </Link>
      <Link to="/login"> <h3>Login</h3> </Link>
      <Link to="/admin"> <h3>Add Product</h3> </Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
background-color:gray;
color: whitesmoke;
h3{
  color: #dfdfdf;
  text-decoration: none;
}
`
