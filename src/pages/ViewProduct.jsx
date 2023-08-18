import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { styled } from 'styled-components';

const ViewProduct = () => {
    const{id}=useParams();
    const [data,setData]=useState({});
    const products=useSelector(store=>store.productReducer.products)
    useEffect(()=>{
        const product=products.find((el)=>el.id===+id)
        console.log('product:', product)
        setData(product)
    },[])
  return (
    <DIV>
        <div>
            <br />
        <ProductCard {...data}/>
        </div>
    </DIV>
  )
}

export default ViewProduct

const DIV=styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`