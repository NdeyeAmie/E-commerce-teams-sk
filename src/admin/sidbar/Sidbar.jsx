import React, { useState } from 'react'
import  Button  from '@mui/material/Button'
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io"
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import '../navbar/Header.css'
import { Link } from 'react-router-dom';


function Sidbar() {

    const [activeTab , setActiveTab] = useState(0);
    const [isToggleSubmenu , setIsToggleSubmenu] = useState(false)

    const isOpenSubmenu = (index) => {
      setActiveTab(index)
      setIsToggleSubmenu(!isToggleSubmenu)
    }

  return (
    <div className='sidebar'>
        <ul>
            <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(0)}>
                    <span className='icon'><MdDashboard/></span>
                    Dashboard
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                    </li>
                    <li>
                    
                <Button className={`w-100 ${activeTab===1  && isToggleSubmenu === 
                true ? 'active' : ''}`} onClick={()=> isOpenSubmenu(1)}>
                    <span className='icon'><FaProductHunt/></span>
                    Prodcuts
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===1 &&
                         isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                    <ul className='submenu'>
                    <li><Link to="#">Product list</Link></li>
                    <li><Link to="#">Product View</Link></li>
                    <li><Link to="#">Product Upload</Link></li>
                    </ul>
                    </div>
                    </li>
                    <li>
                    <Link to="/">
                <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(2)}>
                    <span className='icon'><FaCartArrowDown/></span>
                    Orders
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                    </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(3)}>
                    <span className='icon'><MdMessage/></span>
                    Message
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li> 
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(4)}>
                    <span className='icon'><IoMdNotifications/></span>
                    Notifications
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
            </li> 
            <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(5)}>
                    <span className='icon'><IoIosSettings/></span>
                    Setting
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
            </li>
            <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(6)}>
                    <span className='icon'><FaUser/></span>
                    Login
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
            </li>
            <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===7 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(7)}>
                    <span className='icon'><FaUser/></span>
                    Sign Up
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
            </li>
            <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===8 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(8)}>
                    <span className='icon'><FaCartArrowDown/></span>
                    Orders
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                    </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===9 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(9)}>
                    <span className='icon'><MdMessage/></span>
                    Message
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    </Link>
                </li> 
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===10 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(10)}>
                    <span className='icon'><IoMdNotifications/></span>
                    Notifications
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
            </li> 
            <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===11 ? 'active' : ''}`}
                 onClick={()=> isOpenSubmenu(11)}>
                    <span className='icon'><IoIosSettings/></span>
                    Setting
                    <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </Link>
            </li>
        </ul>

        <br />

        <div className="logoutWrapper">
            <div className="logoutBox">
            <Button variant='contained'><IoMdLogOut/> Logout</Button>
        </div>
        </div>


    </div>
  )
}

export default Sidbar