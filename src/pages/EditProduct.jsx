import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct } from '../Redux/Products/action';
import { styled } from 'styled-components';

const EditProduct = () => {
    const {id}=useParams();
    const [product,setProduct]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const products=useSelector(store=>store.productReducer.products)

    useEffect(()=>{
        const product=products.find((el)=>el.id===+id);
        setProduct(product)
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=product;
        console.log('data:', data)
        dispatch(editProduct(id,data)).then(()=>{
            navigate('/',{replace:true})
        })
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setProduct(prev=>({...prev,[name]:name==="price"?+value:value}))
    }
    const {name,image,brand,price,gender,category}=product
  return (
    <div>
        <h1>Edit Product</h1>
        <DIV>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter name' onChange={handleChange} value={name}/>
                <input type="text" name='image' placeholder='Enter image url' onChange={handleChange} value={image}/>
                <input type="text" name='brand' placeholder="Enter brand" onChange={handleChange} value={brand}/>
                <input type="number" name='price' placeholder="Enter Price" onChange={handleChange} value={price}/>
                <select name="gender" onChange={handleChange} value={gender}>
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <select name="category" onChange={handleChange} value={category}>
                    <option value="">Select category</option>
                    <option value="top-wear">Top Wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="foot-wear">Foot Wear</option>
                    <option value=""></option>
                </select>
                <button type='submit'>Update Product</button>
            </form>
        </DIV>
    </div>
  )
}

export default EditProduct

const DIV= styled.div`
width:400px;
margin: auto;
margin-top: 5px;
border: 1px solid gray;
padding: 20px;

form{
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
}

input,select{
    height: 40px;
    width:100%;
    font-size:larger;
}

button{
    width:50%;
    height: 35px;
    border: none;
    cursor: pointer;
}

`
