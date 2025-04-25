import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from './components/SideBar/SideBar.jsx';

const DashBoard = () => {
  return (
    <div>
        <SideBar/>
        <Outlet/>

    </div>
  )
}

export default DashBoard;