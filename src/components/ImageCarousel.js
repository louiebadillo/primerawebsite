import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const ImageCarousel = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={16}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
        }}
        scrollbar={{
          hide: true,
        }}
        navigation={{
          enabled: true,
          hideOnClick: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt || `Carousel image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

