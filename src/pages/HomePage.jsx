import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <WRAPPER>
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className='product-list'>
        <ProductList/>
        </div>
    </WRAPPER>
  )
}

export default HomePage

const WRAPPER=styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
padding: 5px;

.sidebar{
    width:15%;
    border-right: 2px solid gray;
}

.product-list{
    width:84%
}
`