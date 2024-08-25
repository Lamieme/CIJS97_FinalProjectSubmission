import React from 'react'
import './Banner.css'
import BannerIMG from '../img/BannerIMG.png'
import EventCountdown from './CountdownBanner.jsx'




function Banner() {
  return (
    <div className='Banner'>
        <div className="BannerRight">
            <p className='letter'>Categories</p>
            <h1>Enhance Your Music Experience</h1>
            <EventCountdown />
            <button>Buy Now!</button>
        </div>
        <div className="BannerLeft">
            <img src={BannerIMG} alt="" />
        </div>


    </div>
  )
}

export default Banner