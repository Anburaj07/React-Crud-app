import { ADD_PRODUCT, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";

const initialState=    {
    products:[],
    isLoading:false,
    isError:false,
    errorMessage:""
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:{
            return {...state,isLoading:true}
        }
        case PRODUCT_SUCCESS:{
            return {...state,isLoading:false,products:payload,isError:false}
        }
        case PRODUCT_FAILURE:{
            return {...state,isLoading:false,isError:true,errorMessage:payload}
        }
        case ADD_PRODUCT:{
            return {...state,isLoading:false,products:[...state.products,payload],isError:false}
        }
        // above products update is not mandatory
        case PATCH_PRODUCT_SUCCESS:{
            return {...state,isLoading:false,isError:false}
        }
        default:
            return state;
    }
}