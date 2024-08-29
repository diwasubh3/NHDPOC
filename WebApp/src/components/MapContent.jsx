import React from 'react'
import {RiSettings4Fill} from 'react-icons/ri'
import { useState } from 'react'

const MapContent = () => {
    const [showSetting,setShowStting] = useState(false);
    const handleSetting=()=>{
        setShowStting(!showSetting);
    }
  return (
    <div className='map-container'>
        <div className="map-header">
            <div className='map-text'>Real Time Hazards</div>
            <span onClick={handleSetting} className='icon'><RiSettings4Fill /></span>
        </div>
        {showSetting 
        ?
         <div>
            <div className="map-options">
                <h4>View Data (Default)</h4>
                    <div className='flex-input'>
                        <input  type="radio" /> 
                        <label>Map View</label>
                    </div>
                    <div className='flex-input'>
                        <input  type="radio" /> 
                        <label>List View</label>
                    </div>
            </div>
            <div className="hazard-options">
                <h4>Map Features</h4>
                <div className='flex-input'>
                        <input  type="checkbox" /> 
                        <label>Show real time hazards with alerts</label>
                </div>
                <div className='flex-input'>
                        <input  type="checkbox" /> 
                        <label>Show description, zone coverage, map name</label>
                </div>
                <div className='flex-input'>
                        <input  type="checkbox" /> 
                        <label>Filter byorder history</label>
                </div>
            </div>
         </div> 
        : (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7090008649952!2d72.92368267643691!3d19.12041788209338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e89e8baf3b%3A0x531d6554e145602e!2sEMBASSY%20247!5e0!3m2!1sen!2sin!4v1724664209291!5m2!1sen!2sin" 
            width="99%" 
            height="100%" 
            loading="lazy"
            style={{border:0}} 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      )}
 
        
    </div>
  )
}

export default MapContent