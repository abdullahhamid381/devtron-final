import React from 'react'
import './Scss/Services.scss'
import partner from '../../assets/partner.webp'
import { service } from '../Data'
const Services = () => {
    return (
        <div className='service-parent'>
            <div className='partner'>
                <img src={partner} alt="" />
            </div>
            <div className='service-text'>
                <div className="text">
                    <h1>What Kind Of Servieces We Provide</h1>
                    <p>Amet massa vitae tortor condimentum lacinia. Tellus in hac habitasse platea. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. In iaculis nunc sed augue lacus viverra vitae congue. Id diam vel quam elementum.</p>
                </div>
             <div className='service-grid'>
            {
                service.map((item)=>{
                    return(
                        <div className='service-sub-parent'>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
    
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                    )
                })
            }
             </div>
            </div>
        </div>
    )
}

export default Services