import React from 'react'
import '../../styles/testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar1 from '../../assests/images/avatar01.png'
import avatar2 from '../../assests/images/avatar02.png'

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">

            <h2 className="section__title">
                Testimonials
            </h2>
            <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                    <img src={avatar1} alt='' />
                </div>

                <h4>Fernandes</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde,
                     facilis voluptatibus consectetur, labore magnam praesentium libero.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-02">
                    <img src={avatar2} alt='' />
                </div>

                <h4>Fernandes</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde,
                     facilis voluptatibus consectetur, labore magnam praesentium libero.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-03">
                    <img src={avatar1} alt='' />
                </div>

                <h4>Fernandes</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium unde,
                     facilis voluptatibus consectetur, labore magnam praesentium libero.
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  );
}