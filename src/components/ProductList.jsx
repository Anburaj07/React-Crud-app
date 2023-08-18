import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/Products/action';
import { styled } from 'styled-components';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    // console.log('searchParams:', searchParams.getAll('gender'))

    let paramObj={
        params: {
          gender: searchParams.getAll('gender'),
          _sort:searchParams.get('order') && "price",
          _order:searchParams.get('order')
        }
      }

    const products=useSelector((store)=>store.productReducer.products);
    useEffect(()=>{
        dispatch(getProducts(paramObj))
    },[searchParams])
  return (
    <DIV>
        {products.map((el)=>(
            <ProductCard key={el.id} {...el}/>
        ))}
    </DIV>
  )
}

export default ProductList

const DIV=styled.div`
border: 3px solid gray;
padding: 10px;
margin: auto;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;

`