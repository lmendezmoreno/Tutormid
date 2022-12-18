import React, {useContext, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import NavbarDashboard from '../../Components/Groups/NavbarDashboard/NavbarDashboard';
import { AuthContext } from '../../context/auth.context';

export default function Dashboard() {
  const { isLoginFunction } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
   if(!fetch()){
    navigate('/');
   }
  }, [])

  const fetch=async()=>{
     await isLoginFunction();
  }
  
  return (
    <>
        <NavbarDashboard/>
         <Outlet />
    </>
  )
}
