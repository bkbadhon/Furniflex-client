import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from '../../../public/b1.jpg'
import banner2 from '../../../public/b2.jpg'
import banner3 from '../../../public/b3.jpg'
import banner4 from '../../../public/b4.jpg'
import banner5 from '../../../public/g5.jpg'
import banner6 from '../../../public/g6.jpg'
const Banner = () => {
    return (
        <div className="overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={
              {
                  delay : 1000
              }
          }
          
          loop={true}
          navigation={true}
          modules={[Keyboard, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
  
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner3} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner4} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner5} alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full object-cover h-[600px]" src={banner6} alt="" /></SwiperSlide>
        
        </Swiper>
      </div>
    );
};

export default Banner;