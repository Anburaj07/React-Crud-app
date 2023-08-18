import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components'

const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const [gender,setGender]=useState(searchParams.getAll("gender")||[]);
    // console.log('searchParams:', searchParams.getAll("gender"))
    const[order,setOrder]=useState(searchParams.get("order")||'');
    
    const handleGender=(e)=>{
        const{value}=e.target
        let newGenderData=[...gender];
        if(newGenderData.includes(value)){
            newGenderData=newGenderData.filter(el=>el!==value)
        }else{
            newGenderData.push(value)
        }
        setGender(newGenderData)
        // console.log('newGenderData:', newGenderData)
    }

    const handleOrder=(e)=>{
        const {value}=e.target;
        console.log('value:', value)
        setOrder(value)
    }

    useEffect(()=>{
        let params={
            gender            
        }
        order && (params.order=order)
        setSearchParams(params)
    },[gender,order])

  return (
    <DIV>
      <h3>Filter bt Gender</h3>
      <div>
      <input type="checkbox" value="male" onChange={handleGender} checked={gender.includes('male')}/>
        <label >Men</label>
      </div>
      <div>
      <input type="checkbox" value="female" onChange={handleGender} checked={gender.includes('female')}/>
        <label >Women</label>
      </div>
      <div>
      <input type="checkbox" value="kids" onChange={handleGender} checked={gender.includes('kids')}/>
        <label >Kids</label>
      </div>

      <h3>Sort by Price</h3>
      <div onChange={handleOrder}>
        <div >
        <input type="radio" name='order' value={"asc"}  defaultChecked={order==='asc'}/>
        <label> Low to High</label>
        </div>
        <div>
        <input type="radio" name='order' value={"desc"} defaultChecked={order==='desc'}/>
        <label> High to Low</label>
        </div>
      </div>
    </DIV>
  )
}

export default Sidebar

const DIV=styled.div`
display: flex;
padding-left: 10px;
flex-direction: column;
align-items: baseline;
`
