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
import EditRecipe from '../admin/editRecipe'
import DeleteRecipe from '../admin/DeleteRecipe'
import ReadData from '../admin/ReadData'
import Settings from '../admin/settings'
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
        <Route path="/reset/:email" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/delete/:id" element={<DeleteRecipe />} />
        <Route path="/view/:id" element={<ReadData />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="about" element={<About />} />
    </Routes>
  )
} 

export default Routers;
