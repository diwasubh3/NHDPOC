import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { HiMiniSquaresPlus } from "react-icons/hi2";
const Header = ({setSelectedLayout,toggleSidebar}) => {
  const handleLayoutChange = (event) => {
    setSelectedLayout(event.target.value);
  };
 
  return (
    <div className='header'>
        <div className="first-line">  
          <span className='dashboard-text'>Dashboard</span>
          <select className='layout-options' onChange={handleLayoutChange} defaultValue="chart-layout-1">
          <option value="chart-layout-1">Layout 1</option>
          <option value="chart-layout-2">Layout 2</option>
        </select>
          <span onClick={toggleSidebar} className="settings"><HiMiniSquaresPlus/></span>
          <span className="alert"><IoNotifications /></span>
        </div>
        <div className="welcome-div">
          <span className="welcome-text">Welcome Back, </span>
          <span className="welcome-name">Lucy</span>
        </div>
    </div>
  )
}
 
export default Header