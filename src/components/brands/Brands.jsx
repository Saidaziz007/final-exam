import React from "react";
import brands1 from "../../assets/images/brands1.svg";
import brands2 from "../../assets/images/brands2.svg";
import brands3 from "../../assets/images/brands3.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Brands = () => {
  return (
    <>
      <div className="catalog-top">
        <h1>Только проверенные бренды</h1>
        <div className="catalog-top-btns">
          <button className="catalog-btn">
            <FaArrowLeftLong />
          </button>
          <button className="catalog-btn">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
        breakpoints={{
          226: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src={brands1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brands1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Brands;
