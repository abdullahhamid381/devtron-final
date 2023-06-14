import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';

import './Scss/Review.scss';
import { SwiperButton } from './SwiperButton';

function Review() {
    return (
        <div className="Review-parent">

            <div className='slider'>
                <h1>Our Completed Projects</h1>
                <Swiper
                    
                    
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    breakpoints={{
                     
                        1024: {
                          slidesPerView: 1,
                          spaceBetween: 50,
                        },
                      }}
                className='swiper-back'>

                    <SwiperSlide className="res-slide" ></SwiperSlide>
                  


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

export default Review;
