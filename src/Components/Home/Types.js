import React from 'react'
import './Scss/Types.scss'
import { progress } from '../Data'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
const Types = () => {
    return (
        <div className='types-back'>
            <div className='types-parent'>
                <div className='text'>
                    <h1>Types of Applications We Built</h1>
                    <p>Tincidunt lobortis feugiat vivamus at augue. Nunc vel risus commodo viverra maecenas. Erat velit scelerisque in dictum non. Fringilla ut morbi tincidunt augue interdum velit euismod in. Tellus molestie nunc non blandit massa. Congue eu consequat ac felis. Nunc sed augue lacus viverra vitae congue. Condimentum vitae sapien pellentesque habitant morbi tristique.</p>
                </div>
              {
                progress.map((itme)=>{
                    
                    return(

                        <div className={itme.classfirst}>
                        <div className='title'>
                            <h1>{itme.title}</h1>
                        </div>
                        <div class='progress-bar'>
                            <div class="progress"></div>
                        </div>
                        <div className='percent'>
                            <h1>{itme.percent}</h1>
                        </div>
                    </div>
                    )
                })
              }
               <div className='contact'>
                <button><AiOutlineArrowRight/></button><span> Contact Now</span>
                </div>
            </div>
        </div>
    )
}

export default Types