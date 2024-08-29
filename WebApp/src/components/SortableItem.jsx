import React, { useState } from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import ReactECharts from 'echarts-for-react';
import { RiSettings4Fill } from 'react-icons/ri';

 
export default function SortableItem({ chartData , deleteItem }) {
  
  const [showSetting, setshowSetting] = useState(false)
 
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: chartData.id });
 
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
 
  // const barOption = ;
 
  // const areaOption = {
  //   xAxis: {
 
  function toggleSettings() {
    setshowSetting(prevState => !prevState)
    console.log('in toggle')
  }
 
  return (
 
    <div className='card scrollable-card' ref={setNodeRef} style={style} {...attributes} {...listeners}>
 
      <div className="scrollable-card-header">
       
        <span className='card-header-text'>{showSetting ? 'Settings' : `${chartData.type} Chart` }</span>
        <span onClick={toggleSettings} className='scrollable-card-btn'><RiSettings4Fill/></span>
        {/* <button type="button" onClick={() => deleteItem(chartData.id)}>Delete</button> */}
      </div>
 
      {showSetting ? 
            <div>
            <div className="map-options">
                <h4>Hazard Type</h4>
                    {/* <div className='flex-input'> */}
                        {/* <input  type="radio" />
                        <label>Map View</label> */}
                        <select className='sortable-settings-select' value={chartData.type} >
                            <option value="Wildfire" >Wildfire</option>
                            <option value="Earthquake">Earthquake</option>
                            <option value="Flood">Flood</option>
                        </select>
                    {/* </div> */}
                    
            </div>
            <div className="hazard-options">
                <h4>Graph Type</h4>
                <select className='sortable-settings-select' value={chartData.chartType}>
                    <option value="Bar">Bar</option>
                    <option value="Pie">Pie</option>
                    <option value="Line">Line</option>
                </select>
            </div>
         </div> : 
            (
              <ReactECharts option={{ ...chartData.option }} style={{height: '90%', width: '100%'}} />
      )}
 
    </div>
  );
}
 