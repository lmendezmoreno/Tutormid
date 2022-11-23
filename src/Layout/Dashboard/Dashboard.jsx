import React from 'react';
import { Outlet  } from "react-router-dom";



export default function Dashboard() {
  return (
    <div>
        Dashboard Layout
        <Outlet/>
    </div>
  )
}
