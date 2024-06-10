import axios from "axios";
import React from "react";
import "./Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper/modules";
import { PRODUCT_IMG } from "../../static";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { toggleWishlist } from "../../context/wishlistSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.value);
  return (
    <>
      {data?.map((el) => (
        <div key={el.id} className="card">
          <div className="card-img">
            <Link to={`/product/${el.id}`}>
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
                  <img src={el.url[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={el.url[1]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={el.url[2]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={el.url[3]} alt="" />
                </SwiperSlide>
              </Swiper>
            </Link>
            <button onClick={() => dispatch(toggleWishlist(el))}>
              {wishList.some((s) => s.id === el.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
          <div className="card-info">
            <p className="card-info-cat">{el.category}</p>
            <h2>{el.title}</h2>
            <div className="card-info-bottom">
              <div className="card-price">
                <span>{el.price * 2} 000 ₽</span>
                <p>{el.price} 000 ₽</p>
              </div>
              <button onClick={() => dispatch(addToCart(el))}>
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
