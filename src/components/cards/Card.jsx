import axios from "axios";
import React from "react";
import "./Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper/modules";
import { PRODUCT_IMG } from "../../static";
import { MdShoppingCart } from "react-icons/md";

const Card = ({ data }) => {
  return (
    <>
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card-img">
            <Swiper
              loop={true}
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={PRODUCT_IMG[el.id]?.img[0]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PRODUCT_IMG[el.id]?.img[1]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PRODUCT_IMG[el.id]?.img[2]} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PRODUCT_IMG[el.id]?.img[3]} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card-info">
            <h2>{el.title}</h2>
            <div className="card-info-bottom">
              <div className="card-price">
                <span>{el.price * 2}₽</span>
                <p>{el.price}₽</p>
              </div>
              <button>
                <MdShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
