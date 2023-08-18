import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

const initialState={
    isAuth:false,
    token:'',
    loading:false,
    isError:false,
    errMessage:''
}
export const authReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case AUTH_REQUEST:{
            return{...state,isLoading:true}
        }
        case AUTH_FAILURE:{
            return{...state,isLoading:false,isAuth:false,isError:true,errMessage:payload}
        }
        case AUTH_SUCCESS:{
            return{...state,isLoading:false,isAuth:true,token:payload,isError:false}
        }
        default:
            return state
    }
}