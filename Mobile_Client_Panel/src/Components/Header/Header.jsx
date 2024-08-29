/*
1. style "dashboard, welcome back"
2. style order button
3. integrate search button and input
 */
import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { IoMdOptions } from "react-icons/io";


function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="main-title">
        <h2>DASHBOARD</h2>
        <h3>Welcome Back, Lucy</h3>
      </div>
      <button className="order-report">ORDER A REPORT</button>
      <div>
        <input type="text"
        placeholder="Search data..."
        className="search-input"/>
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <IoMdOptions className="icon" />
        <BsFillBellFill className="icon" />
      </div>
    </header>
  );
}

export default Header;
