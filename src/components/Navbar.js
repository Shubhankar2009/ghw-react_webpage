import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import "./nav_style.css"

export default function Navbar() {
  let history = useHistory()

  return (
    <div className='navbar'>
        <div className="nav_item" id="nav1"><Link to="/">HOME</Link></div>
        <div className="nav_item" id="nav2"><Link to="/">PEOPLE</Link></div>
        <div className="nav_item" id="nav3"><Link to="/">RESOLUTIONS</Link></div>
        <div className="nav_item" id="nav4"><Link to="/">TRACKER</Link></div>
    </div>
  )
}
