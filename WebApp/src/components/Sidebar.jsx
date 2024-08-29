import React from 'react'
import sidebarData from '../data/sidebarData'

const Sidebar = ({ isExpandedSidebar }) => {
  return (
    <div className='sidebar'>
         <div className={`${isExpandedSidebar ? 'display-hidden' : 'display-block'} `}>
            {/* <div className={`logo ${isExpandedSidebar ? 'display-hidden' : 'display-block'}`}>Logo</div> */}
         </div>
            {sidebarData.map(menu=>(
                <div  key={menu.id} className='link'>
                    <div  className='icon'>{menu.icon}</div>
                    <div className={`${isExpandedSidebar ? 'display-hidden' : 'display-block'} link-text `}>
                        {menu.name}
                    </div>
                </div>
            ))}
            <div className="bottom-section" style={{display: isExpandedSidebar ? "none" : "block"}}>
                <div className="bottom-content">
                  <h3>Lucy</h3>
                  <p >Admin</p>
                  <button className='log-out-btn'>LOG OUT</button>
                </div>
            </div>
    </div>
  )
}

export default Sidebar



// style={{display: isExpandedSidebar ? "block" : "none"}}