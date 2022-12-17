// Import  swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Slider = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
        >
            <SwiperSlide>
                <img className="w-100" src={require('@src/assets/images/banners/banner1.jpg')} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-100" src={require('@src/assets/images/banners/banner-2.png')} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider