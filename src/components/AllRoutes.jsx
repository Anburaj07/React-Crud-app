import React from 'react'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import HomePage from '../pages/HomePage'
import EditProduct from '../pages/EditProduct'
import ViewProduct from '../pages/ViewProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<PrivateRoute>
          <Admin/>
        </PrivateRoute>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/view/:id" element={<PrivateRoute>
          <ViewProduct/>
        </PrivateRoute>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default AllRoutes
