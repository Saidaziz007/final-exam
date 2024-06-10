import React from "react";
import "./Catalog.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CATALOG_ITEMS } from "../../static";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import catalogImg1 from "../../assets/images/catalog-1.svg";
import catalogImg2 from "../../assets/images/catalog-2.svg";
import catalogImg3 from "../../assets/images/catalog-3.svg";
import catalogImg4 from "../../assets/images/catalog-4.svg";
import catalogImg5 from "../../assets/images/catalog-5.svg";
import catalogImg6 from "../../assets/images/catalog-6.svg";

const Catalog = () => {
  return (
    <div className="catalog-all">
      <div className="catalog-top">
        <h1>Каталог</h1>
        <button>
          Весь каталог <FaArrowRightLong />
        </button>
      </div>
      <div className="catalog-wrapper">
        {CATALOG_ITEMS?.map((el) => (
          <div key={el.id} className="catalog-card">
            <div className="catalog-card-left">
              <h2>{el.title}</h2>
              <button>
                От {el.price}₽ <FaArrowRightLong />
              </button>
            </div>
            <div className="catalog-card-right">
              <img src={el.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="catalog-wrapper-res">
        {CATALOG_ITEMS?.map((el) => (
          <div key={el.id} className="catalog-card">
            <div className="catalog-card-con">
              <h2>{el.title}</h2>
              <img src={el.img} alt="" />
              <button>
                От {el.price}₽ <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Swiper
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper-1"
      >
        <SwiperSlide>
          <div className="catalog-wrapper-swiper">
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Люстры</h2>
                <img src={catalogImg1} alt="" />
                <button>
                  От 940₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Светильники</h2>
                <img src={catalogImg2} alt="" />
                <button>
                  От 350₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catalog-wrapper-swiper">
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Бра</h2>
                <img src={catalogImg3} alt="" />
                <button>
                  От 470₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Торшеры</h2>
                <img src={catalogImg4} alt="" />
                <button>
                  От 630₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catalog-wrapper-swiper">
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Настольные лампы</h2>
                <img src={catalogImg5} alt="" />
                <button>
                  От 770₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="catalog-card">
              <div className="catalog-card-con">
                <h2>Споты</h2>
                <img src={catalogImg6} alt="" />
                <button>
                  От 490₽ <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <button className="catalog-btn-res">
            Весь каталог <FaArrowRightLong />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catalog;
