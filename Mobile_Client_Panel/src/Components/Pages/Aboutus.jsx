import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import { useState } from 'react';


function Aboutus() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };

  return (
    <div className="grid-container">
      <div className="About-us">
        <h1>About Us</h1>
        <h2>Linedata</h2>
        <p>
          At Linedata, we know that the banking and financial system is
          essential, as vital to society as energy is to life, fueling financial
          transformation is vital to development and leadership. To help people
          comply with financial regulation, to operate data and manage strategic
          plan developments, to support companies' efficiency and profitability
          so that they fully dedicate themselves to their core business, to
          empower growth, wealth and leadership, to anticipate and master
          transformation in an ever-changing world, we humanize technology.
          Because we are independent, trustworthy, approachable and committed,
          because our teams are close, attentive, caring and passionate, because
          our experts are specialists, partners and responsive, we excel
          ourselves to deliver global solutions for leadership.
        </p>
      </div>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
    </div>
  );
}

export default Aboutus