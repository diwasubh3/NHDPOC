import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
 
const Layout = () => {
 
    const [isExpandedSidebar, setisExpandedSidebar] = useState(false)
    const [selectedLayout, setSelectedLayout] = useState('chart-layout-1');
    
 
    const toggleSidebar = () => {
        setisExpandedSidebar(prevState => !prevState);
        console.log('clicked toggleSidebar')
      };
 
  return (
    <div className={`layout ${isExpandedSidebar ? 'layout-expanded' : 'layout-closed'}`}>
        <Header setSelectedLayout={setSelectedLayout} toggleSidebar={toggleSidebar}/>
        <Sidebar isExpandedSidebar={isExpandedSidebar}/>
        <Content toggleSidebar={toggleSidebar} chartLayout={selectedLayout}/>
    </div>
  )
}
 
export default Layout