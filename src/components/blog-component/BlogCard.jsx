import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BlogCard = () => {
  return (
    <>
      <div className="catalog-top">
        <h1>Блог</h1>
        <button>
          Перейти в блог <FaArrowRightLong />
        </button>
      </div>
      <div className="blog-wrapper">
        <div className="blog-card">
          <div className="blog-card-img">
            <img src={blog1} alt="" />
          </div>
          <div className="blog-card-info">
            <div className="blog-card-title">
              <h2>Как правильно освещать дом снаружи?</h2>
              <GoArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-img">
            <img src={blog2} alt="" />
          </div>
          <div className="blog-card-info">
            <div className="blog-card-title">
              <h2>Как правильно освещать дом снаружи?</h2>
              <GoArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-card-img">
            <img src={blog3} alt="" />
          </div>
          <div className="blog-card-info">
            <div className="blog-card-title">
              <h2>Как правильно освещать дом снаружи?</h2>
              <GoArrowUpRight />
            </div>
            <p>01.01.2024</p>
          </div>
        </div>
      </div>
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper-2"
      >
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog1} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog2} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog3} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog1} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog2} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-card">
            <div className="blog-card-img">
              <img src={blog3} alt="" />
            </div>
            <div className="blog-card-info">
              <div className="blog-card-title">
                <h2>Как правильно освещать дом снаружи?</h2>
                <GoArrowUpRight />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogCard;
