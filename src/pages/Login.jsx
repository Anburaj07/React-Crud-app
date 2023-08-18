import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../Redux/Authentication/action'
import { styled } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('eve.holt@reqres.in')
    const [password,setPassword]=useState('cityslicka')
    //cityslicka //eve.holt@reqres.in
    const location=useLocation();
    // console.log('location-login:', location)

    const navigate=useNavigate()
    
    const dispatch=useDispatch();
    
    const {isAuth,isError,token,loading,errMessage}=useSelector(store=>{
        // console.log(store)
        return{
            isAuth:store.authReducer.isAuth,
            token:store.authReducer.token,
            loading:store.authReducer.loading,
            isError:store.authReducer.isError,
            errMessage:store.authReducer.errMessage
        }
      },shallowEqual)

    const handleSubmit=(e)=>{
        e.preventDefault();
        let user={
            email,
            password
        }
        dispatch(loginUser(user)).then(()=>{
          navigate(location.state,{replace:true})
        })
    }

  return (
    <DIV auth={isAuth} err={isError}> 
      <form onSubmit={handleSubmit}>
        <h2>{isAuth ? "Login Successfull":"Login to continue"}</h2>
        <input type="email" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" placeholder='Enter user password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
      <h3>{isError && errMessage}</h3>
    </DIV>
  )
}

export default Login

const DIV=styled.div`
width: 400px;
margin: auto;
padding: 20px;

h2{
  color: ${({auth})=>(auth? "green":"red")};
}

form{
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
    border: 1px solid gray;
    padding: 20px;
}

input{
  height: 40px;
  font-size: 20px;
  border: ${({err})=>err?"1px solid red":"1px solid gray"};
}
button{
  height: 40px;
  font-size: 20px;
  border: none;
}
`
