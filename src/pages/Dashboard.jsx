import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  useEffect(()=>{
    //redirect to login form when no token found
    if(!token){
      navigate('/login');
    }
  },[token])
  return (
    <div>
      <Navbar/>
        <div className='mt-12'>
            <Products/>
        </div>
    </div>
  )
}

export default Dashboard