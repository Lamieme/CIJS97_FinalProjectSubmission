import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper/modules'

function ProductBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: '90%', maxWidth: 'auto' }} // Adjust the width as needed
      >
        <SwiperSlide>
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-flip-6-khuyen-mai-moi-16-8-2024.png"
            alt="Trulli"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nang-cap-ipone-performance-15-8.jpg"
            alt="Trulli"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Kieslect-KS-home.jpg"
            alt="Trulli"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/vivo-v30e-home-thang8.png"
            alt="Trulli"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductBar
