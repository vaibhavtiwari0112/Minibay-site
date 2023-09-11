import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {  BsFileText,
  BsCaretDownFill,
  BsCaretUpFill,
  BsHouseDoor,
  BsGrid,
  BsCart,
  BsArrowRepeat,
  BsTools,
  BsCalculator,
  BsTruck,
  BsClipboardData,
  BsPerson,
  BsGift,
  BsTrainLightrailFrontFill,
  BsGearWideConnected,
  BsLink,
  BsQuestionCircle,} from 'react-icons/bs'; // Import icons
import './SideMenu.css';
const SideMenu = () => {
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className='sideMenu'>
<h1><span className='purple-letter'>POINT</span><span className='orange-letter'>NXT</span></h1>
<p>
    <span className='purple-letter'>Connect</span> <span className='orange-letter'>Process</span> <span className='purple-letter'>Track</span></p>
<button className='sideMenu-button'><BsHouseDoor /> Dashboard</button>
<button className='Categories'>   General</button>
<button className='sideMenu-button'><BsGrid />I nventory</button>
<button className='sideMenu-button'><BsCart /> Orders</button>
<button className='sideMenu-button'><BsArrowRepeat /> Returns</button>
<button className='Categories'>  Utilitis</button>
<button className='sideMenu-button'><BsTruck /> Shipping</button>
<button className='sideMenu-button'><BsTrainLightrailFrontFill /> Channel</button>
<button className='sideMenu-button'><BsGearWideConnected /> Integrations</button>
<button className='Categories'>   Billing</button>
<button className='sideMenu-button'><BsLink />   Buy Tokens</button>
<button className='Categories'>   Tools</button>
<button className='sideMenu-button'><BsCalculator />  Price Calculator</button>
<button className='sideMenu-button'><BsClipboardData />  Shipping Calculator</button>
<button className='Categories'>   Others</button>
<div className="reports-button">
     
        <div className=" sideMenu-button reports-toggle-button" onClick={toggleDropdown}>
          <span >
            <BsFileText /> Reports {isDropdownOpen ?   <BsCaretUpFill className='dropdown-icon'/> :    <BsCaretDownFill className='dropdown-icon'/>}
          </span>
        </div>
        
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </div>
        )}
      </div>
<button className='sideMenu-button'><BsPerson />  Account</button>
<button className='sideMenu-button'>Refer & Earn</button>
<div className='additional-button'>
<button ><BsQuestionCircle /> Help</button>
</div>
    </div>
  )
}

export default SideMenu