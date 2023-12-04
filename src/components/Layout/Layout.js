import React from 'react'
import Header from "../Header/Header"
import Sidebar from "../SideBar/Sidebar";
import { Outlet } from 'react-router';
import { useState } from 'react';
import "../Layout/Layout.scss";

const Layout = () => {
    const[sidebar,setSideBar] = useState('true');
    const[outletMargin, setouletMargin] = useState('true');

    const handleToggleSideBar = () => { 
      setSideBar(value => !value);
      setouletMargin(value => !value);
     };
    return (
      <>
        <Header handleToggleSideBar = {handleToggleSideBar}/>
          <div className="app container-fluid">
            <Sidebar sidebar = {sidebar}/>
            <div className={outletMargin ? 'app__outlet' :'app__outlet close'}>
              <Outlet/>
            </div>
          </div>
      </>
      )
  }
  

export default Layout