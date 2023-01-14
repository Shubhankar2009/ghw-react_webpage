import React from 'react'
import './home_style.css'
import Navbar from './Navbar'
import tracker from "./videos/shield.gif"
import meet from "./videos/handshake.gif"

export default function Home() {
  let date = new Date();
  let day =  date.getDate()
  
  return (
    <div>
        <Navbar/>
        <div className="head_main">
          <div className="head">
            <div className="content">
              <h1 className="title">My Resolutions</h1>
              <h4 className='subtitle'>Your One Stop Solution For Your All New Year Resolutions</h4>

            </div>
            <div className="time" >
              <h1>{365-day}</h1>
              <h2>Days Left</h2>
            </div>
          </div>

        </div>
        <div className='tracker'>
          <h2 className="tracker-text">Keep Track Of Your Daily Activities</h2>
          <img className="tracker-gif" src={tracker} alt="gif" />
        </div>
        <div className='people'>
          <img className="people-gif" src={meet} alt="gif" />
          <h2 className="people-text">Meet New People With Similar Goals Like You</h2>
        </div>
    </div>
  )
}
