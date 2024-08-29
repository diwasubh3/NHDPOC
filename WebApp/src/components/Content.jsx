import React from "react";
import { useState } from "react";
import ListView from "./ListView";
import SortableItem from "./SortableItem";
import chartData from "../data/chartData";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const locations = [
  { lat: 51.5, lon: -0.09, title: "Marker 1" },
  { lat: 51.515, lon: -0.1, title: "Marker 2" },
  { lat: 51.52, lon: -0.12, title: "Marker 3" },
];

import "leaflet/dist/leaflet.css";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import MapContent from "./MapContent";

const Content = ({ toggleSidebar , chartLayout }) => {
  const [isExpandedList, setisExpandedList] = useState(false);
  const toggleList = () => {
    setisExpandedList((prevState) => !prevState);
  };

  const [items, setItems] = useState([...chartData]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // Enable sort function when dragging 10px
    },
  });

  const [widgetVisibleStates, setwidgetVisibleStates] = useState([true, true, true]) 

  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  function deleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);

    setItems([...newItems]);
    console.log(id);
  }

  return (
    <div className={`content ${chartLayout=='chart-layout-1' ? (isExpandedList ? 'layout-1' : 'layout-2') :  (isExpandedList ? 'layout-1' : chartLayout)}`}>
      {/* <div className="top-row"> */}
      
      <div className="card">
        <div className="list-div">

        <button className="expand-btn" onClick={toggleSidebar}>
          &lt;
        </button>
        <div className="list-container">
          <div className="view-list">View All</div>
          <ListView />
        </div>
        <button className="expand-btn" onClick={toggleList}>
          &gt;
        </button>

        </div>
        
      </div>

      <div className={`card ${isExpandedList && "nothing"}`}>
        <MapContent />
        {/* </div> */}

        {/* <div className={`card ${isExpandedList ? 'hidden-card' : ''}`}> */}
        {/* <h3>Real Time Hazards</h3> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7090008649952!2d72.92368267643691!3d19.12041788209338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e89e8baf3b%3A0x531d6554e145602e!2sEMBASSY%20247!5e0!3m2!1sen!2sin!4v1724664209291!5m2!1sen!2sin" 
          width="95%" 
          height="90%" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div> */}
        {/* <div className={`card ${isExpandedList && 'nothing'}`}>
<MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '35vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lon]}>
          <Popup>{location.title}</Popup>
        </Marker>
      ))}
    </MapContainer> */
    }
      </div>

      {console.log(widgetVisibleStates)}
      <div className="sortable-container">
        <div className="sortable-container-header">
          <span className="sortable-container-heading">Hazard statistics</span>
          <div className='flex-input'>
                        <input  type="checkbox" checked={widgetVisibleStates[0]} 
                        onClick={() => {
                          setwidgetVisibleStates(prevState => {
                            // Toggle the visibility of the first item
                            const updatedStates = [...prevState];
                            updatedStates[0] = !updatedStates[0];
                            return updatedStates;
                          });
                        }} />
                        <label>Widget 1</label>
                </div>
                <div className='flex-input'>
                        <input  type="checkbox" checked={widgetVisibleStates[1]}
                        onClick={() => {
                          setwidgetVisibleStates(prevState => {
                            // Toggle the visibility of the first item
                            const updatedStates = [...prevState];
                            updatedStates[1] = !updatedStates[1];
                            return updatedStates;
                          });
                        }} />
                        <label>Widget 2</label>
                </div>
                <div className='flex-input'>
                        <input  type="checkbox" checked={widgetVisibleStates[2]}
                        onClick={() => {
                          setwidgetVisibleStates(prevState => {
                            // Toggle the visibility of the first item
                            const updatedStates = [...prevState];
                            updatedStates[2] = !updatedStates[2];
                            return updatedStates;
                          });
                        }} />
                        <label>Widget 3</label>
                </div>
        </div>

        <div className="sortable-container-items">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToWindowEdges, restrictToHorizontalAxis]}
          >
            <SortableContext
              items={items}
              strategy={horizontalListSortingStrategy}
            >
              {items.map((item, index) => (
                
                widgetVisibleStates[index] && 
                
                <SortableItem
                  key={item.id}
                  chartData={item}
                  deleteItem={deleteItem}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        // const oldIndex = items.indexOf(active.id);
        const oldIndex = items.findIndex((item) => item.id === active.id);

        // const newIndex = items.indexOf(over.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

export default Content;
