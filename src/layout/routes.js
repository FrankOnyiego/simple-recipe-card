import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import RecipeDetails from '../pages/RecipeDetails'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPasswordForm from '../pages/ForgotPasswordForm'
import ResetPassword from '../pages/ResetPassword'
import Admin from '../admin/Admin'

const Routers = ()=> {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPasswordForm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default Routers;
