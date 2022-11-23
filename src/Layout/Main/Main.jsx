import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Groups/Footer/Footer'; 
import Navbar from '../../Components/Groups/Navbar/Navbar'
export default function Main() {

  return (
    <div>
      <Navbar/>
        <Outlet />
      <Footer />
    </div>
  )
}
