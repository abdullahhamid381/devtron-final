import React from 'react'
import './Scss/Banner.scss'
import Navbar from './Navbar'
import ring from '../../assets/ring.webp'
import mobile from '../../assets/mobile.png'
const Banner = () => {
    return (
        <div className='banner-back-parent'>
            <div>
                <Navbar />
            </div>
            <div className='ring-img'>
                <img src={ring} alt="" />
            </div>
            <div className='mobile'>
                 <img src={mobile} alt="" />
            </div>
            <div className='banner-text'>
                <h1>
                    Create the Best <br /> It Solution 
                </h1>
                <button>
                    Contact Now
                </button>
            </div>
        </div>
    )
}

export default Banner