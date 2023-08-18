import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    const location=useLocation();
    // console.log('private:', location)
    // {pathname: '/view/4', search: '', hash: '', state: null, key: 'tkc9i0j0'}
    if(!isAuth){
        return <Navigate state={location.pathname} to={"/login"} replace={true}/>
    }
    return props.children
}

export default PrivateRoute
