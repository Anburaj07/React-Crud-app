import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components'

const ProductCard = ({id,name,image,brand,price,gender,category}) => {
  const isAuth=useSelector((store)=>store.authReducer.isAuth);
  return (
    <PRODUCTWRAPPER>
      <Link to={`/view/${id}`}>
            <img src={image} alt="" />
      </Link>
            <h3>{name}</h3>
            <h3>Price: {price}</h3>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Gender: {gender}</p>
            {isAuth && <Link to={`/edit/${id}`}><button > Edit</button></Link> }            
    </PRODUCTWRAPPER>
  )
}

export default ProductCard

const PRODUCTWRAPPER=styled.div`
border: 3px solid darkcyan;
width: 300px;
padding: 20px;

  img{
    width: 100%;
  }
`