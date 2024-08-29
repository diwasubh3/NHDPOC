import { useState } from 'react'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Aboutus from './Components/Pages/Aboutus';
import './App.css';

function App() {

  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }


  return (
    <BrowserRouter className='grid-container'>
    {/* <div className='grid-container'>
      <Header 
      OpenSidebar={OpenSidebar}
      />
      <Sidebar
      openSidebarToggle={openSidebarToggle} 
      OpenSidebar={OpenSidebar}
      />
      <Home/>
    </div> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App