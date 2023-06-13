import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

import './Scss/Project.scss';
import { SwiperButton } from './SwiperButton';

function Project() {
    return (
        <div className="project-parent">

            <div className='slider'>
                <h1>Our Completed Projects</h1>
                <Swiper
                    
                    
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 30,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                className='swiper-back'>

                    <SwiperSlide className="res-slide" ><a href="https://saltybabiesnft.com/" target='_blank'><img src={p1} alt="" /></a></SwiperSlide>
                    <SwiperSlide className="res-slide" ><a href="https://helloworldot.netlify.app/" target='_blank'><img src={p2} alt="" /></a></SwiperSlide>
                    <SwiperSlide className="res-slide" ><img src={p3} alt="" /></SwiperSlide>
                    <SwiperSlide className="res-slide" ><img src={p4} alt="" /></SwiperSlide>
                    <SwiperSlide className="res-slide" ><img src={p1} alt="" /></SwiperSlide>


                    <div className='buttons'>
                        <SwiperButton />
                    </div>

                </Swiper>
                <div className='contact'>
                <button><AiOutlineArrowRight/></button><span> Contact Now</span>
                </div>
            </div>
        </div>
    );
}

export default Project;
