import React from 'react'
import './Header.css'
import { IoMdSearch } from "react-icons/io";

function SeachBox() {
  return (
    <div className='seachBox position-relative d-flex align-items-center'>
        <IoMdSearch className="me-2"/>
        <input type="text" placeholder='Search here...'/>
    </div>
  )
}

export default SeachBox