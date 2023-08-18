import axios from "axios"
import { ADD_PRODUCT, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"

export const productRequestAction=()=>{
    return {type:PRODUCT_REQUEST}
}

export const productSuccessAction=(payload)=>{
    return {type:PRODUCT_SUCCESS,payload}
}

export const productFailureAction=(payload)=>{
    return {type:PRODUCT_FAILURE,payload}
}

export const addProductAction=(payload)=>{
    return{type:ADD_PRODUCT,payload}
}

export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch(productRequestAction())
    axios.get(`http://localhost:8080/products`,paramObj)
    .then((res)=>{
        // console.log(res.data);
        dispatch(productSuccessAction(res.data))
    })
    .catch((err)=>{
        // console.log('err:', err)
        dispatch(productFailureAction(err.message))
    })
}

export const addProducts=(product)=>(dispatch)=>{
    dispatch(productRequestAction())
    axios.post(`http://localhost:8080/products`,product)
    .then((res)=>{
        // console.log(res.data);
        dispatch(addProductAction(res.data))
    })
    .catch((err)=>{
        // console.log('err:', err)
        dispatch(productFailureAction(err.message))
    })
}

export const editProduct=(id,data)=>(dispatch)=>{
    dispatch(productRequestAction())
    return axios.patch(`http://localhost:8080/products/${id}`,data)
    .then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    }).catch((err)=>{
        dispatch(productFailureAction(err.message))
    })
}