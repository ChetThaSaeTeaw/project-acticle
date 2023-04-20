import React, { useState , useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function HomeCarousel({ data }) {

  const [ showPoster , setShowPoster ] = useState(4);
  const screenWindow = window.innerWidth;
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    if (screenWindow < 482) {
       setShowPoster(3); 
    } else {
      setShowPoster(4);
    }
  },[screenWindow]);

  return (
    <>
      <Swiper
        slidesPerView={showPoster}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay : 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {!data ? null :
            data.map((item , index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={item.Poster} alt={item.Title} loading="lazy" />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
