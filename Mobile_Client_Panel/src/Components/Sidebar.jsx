/*
1. Logo box and text
2. logout button 
3. Onclick activity on sections
*/
import React from "react";
import {
  IoLogoChrome,
  IoMdHome,
  IoMdSettings,
  IoIosLogOut,
  IoIosContact,
} from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <IoLogoChrome className="icon_header" /> Logo
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          x
        </span>
      </div>

      {/* <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdHome className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoIosContact className='icon'/> About us
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaBusinessTime className='icon'/> Orders
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <CiViewList className='icon'/> Resources
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdSettings className='icon'/> Settings
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoIosLogOut className='icon'/> Log Out
                </a>
            </li>
        </ul> */}
      <div className="sidebar-list">
        <div className="sidebar-list-item">
          <IoMdHome className="icon" />
          <Link to="/" className="icon">
            Dashboard
          </Link>
        </div>
        <div className="sidebar-list-item">
          <IoIosContact className="icon" />
          <Link to="/aboutus" className="icon">
            About us
          </Link>
        </div>
        <div className="sidebar-list-item">
          <a href="">
            <FaBusinessTime className="icon" /> Orders
          </a>
        </div>
        <div className="sidebar-list-item">
          <a href="">
            <CiViewList className="icon" /> Resources
          </a>
        </div>
        <div className="sidebar-list-item">
          <a href="">
            <IoMdSettings className="icon" /> Settings
          </a>
        </div>
        <div className="sidebar-list-item">
          <a href="">
            <IoIosLogOut className="icon" /> Log Out
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
