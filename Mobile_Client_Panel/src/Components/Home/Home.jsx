import React from 'react';
import { useState } from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import clientData from './clientData.json';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
      };
    
     

  return (
    <div className='grid-container'>
    <main className="main-container">
      {/* <div className='main-title'>
            <h2>DASHBOARD</h2>
            <h3>Welcome Back</h3>
        </div> */}
      <div className="main-cards">
        <div>
        
          <div className='card-list
          '>

          {/* <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1> */}
                  <br/>
        {clientData.map((item)=>(
            <div className='list-item'>
                <div className='list-item-line-1'>
                    <h3 className='item-name'>{item.name}</h3>
                    <button className='report-btn'>Reports</button>
                </div>
           
                <div className='list-item-line-2'>
                    <p className='item-status'>Status: {item.status}</p>
                    <p>Order Number: {item.orderNumber}</p>
                    <p>Address: {item.address}</p>
                </div>
               
                <div className='list-item-line-3'>Report Type: {item.reportType}</div>
            </div>
        ))}
        </div>
        </div>  
        
        

          <div className="card-map">
              <h3>Google Map</h3>
              {/* <BsFillGrid3X3GapFill className="card_icon" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4831.891641734668!2d72.92376767570232!3d19.120006359964574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e29db13f91%3A0xe11f062c8cba8ded!2sLinedata!5e0!3m2!1sen!2sin!4v1724615377620!5m2!1sen!2sin"
              width= '100%'
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        {/* <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
      </div>

      <div className='charts-superclass'>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#000000" />
            <Bar dataKey="uv" fill="#808080" />
          </BarChart>
        </ResponsiveContainer>
        </div>
        <div className="charts">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#000000"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#808080" />
          </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="charts">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#000000" />
            <Bar dataKey="uv" fill="#808080" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </main>
      <Header 
      OpenSidebar={OpenSidebar}
      />
      <Sidebar
      openSidebarToggle={openSidebarToggle} 
      OpenSidebar={OpenSidebar}
      />
    </div>
  );
}

export default Home