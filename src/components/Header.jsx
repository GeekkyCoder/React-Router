import React from 'react'
import {Outlet} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
       <Outlet/> || 😁 ||
        Header 
   </div>
  )
}

export default Header