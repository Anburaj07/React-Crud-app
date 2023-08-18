import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

export const authRequestAction=()=>{
    return {type:AUTH_REQUEST}
}
export const authFailureAction=(payload)=>{
    return {type:AUTH_FAILURE,payload}
}
export const authSuccessAction=(payload)=>{
    return {type:AUTH_SUCCESS,payload}
}

export  const loginUser=(userObj)=>(dispatch)=>{
    dispatch(authRequestAction())
   return axios.post('https://reqres.in/api/login',userObj)
    .then((res)=>{
        console.log(res.data)
        const {token}=res.data;  
        dispatch(authSuccessAction(token))                
    }).catch((err)=>{
        console.log('err:', err)
        dispatch(authFailureAction(err.message))
    })
}
