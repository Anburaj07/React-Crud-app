import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addProducts } from '../Redux/Products/action';

const initState={
    name:"",
    image:"",
    brand:"",
    price:0,
    category:"",
    gender:""
}

const Admin = () => {
    const [data,setData]=useState(initState);
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const{name,value}=e.target;
        // console.log(name,value)
        setData(prev=>{
            return {...prev,[name]: name==="price" ? +value: value}
        });
    }
    // const{name}
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
        dispatch(addProducts(data))
        setData(initState)
    }
  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input type="text" name='name' placeholder='Enter name' onChange={handleChange} value={data.name}/>
        <input type="text" name='image' placeholder='Enter image url' onChange={handleChange} value={data.image}/>
        <input type="text" name='brand' placeholder="Enter brand" onChange={handleChange} value={data.brand}/>
        <input type="number" name='price' placeholder="Enter Price" onChange={handleChange} value={data.price}/>
        <select name="gender" onChange={handleChange} value={data.gender}>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
        </select>
        <select name="category" onChange={handleChange} value={data.category}>
            <option value="">Select category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="foot-wear">Foot Wear</option>
            <option value=""></option>
        </select>
        <button type='submit'>Add Product</button>
      </form>
    </DIV>
  )
}

export default Admin

const DIV= styled.div`
width:400px;
margin: auto;
margin-top: 15px;
border: 1px solid gray;
padding: 20px;
margin-bottom: 20px;

form{
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
    padding: 10px;
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
