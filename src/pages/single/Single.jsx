import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube } from "swiper/modules";
import { FaOdnoklassniki, FaRegHeart, FaViber, FaVk } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import "./Single.css";

const API_URL =
  "https://6634b1ce9bb0df2359a2693f.mockapi.io/saidaziz-api/products/";

const Single = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="single">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Товар ({product.id})</p>
        </div>
        <div className="single-all">
          <div className="single-left">
            {product.url && (
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
                {product.url.map((imageUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imageUrl} alt={`Product ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="single-right">
            <h1 className="single-title">{product.title}</h1>
            <p className="single-category">{product.category}</p>
            <div className="single-right-media">
              <p>Артикул : 7655-188</p>
              <div className="single-right-icons">
                <FaOdnoklassniki />
                <FaVk />
                <FaTelegramPlane />
                <IoLogoWhatsapp />
                <FaViber />
              </div>
            </div>
            <p className="single-nalichiy">В наличии</p>
            <div className="single-right-price">
              <p className="single-price">{product.price} 000 ₽</p>
              <p className="single-oldprice">{product.price * 2} 000 ₽</p>
            </div>
            <p className="single-description">{product.description}</p>
            <div className="single-right-quantity">
              <div className="single-right-btn1">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button className="single-add">В корзину</button>
              <button className="single-heart">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
        <div className="single-xar">
          <h1>Характеристика</h1>
          <div className="single-table">
            <div className="single-table-1">
              <p>Цвет</p>
              <p className="single-table-p">Жёлтый</p>
            </div>
            <div className="single-table-2">
              <p>Год</p>
              <p className="single-table-p">2016</p>
            </div>
            <div className="single-table-1">
              <p>Диаметр колеса</p>
              <p className="single-table-p">27.5</p>
            </div>
            <div className="single-table-2">
              <p>Материал рамы</p>
              <p className="single-table-p">Карбон</p>
            </div>
            <div className="single-table-1">
              <p>Размер</p>
              <p className="single-table-p">L</p>
            </div>
            <div className="single-table-2">
              <p>Страна</p>
              <p className="single-table-p">Швейцария</p>
            </div>
            <div className="single-table-1">
              <p>Производитель</p>
              <p className="single-table-p">Scott</p>
            </div>
            <div className="single-table-2-2">
              <p>Покрышки</p>
              <p className="single-table-p">
                Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
                PaceStar compound
              </p>
            </div>
            <div className="single-table-1-2">
              <p>Рама</p>
              <p className="single-table-p">
                Scale Carbon / HMX-технология / технология IMP / Коническая
                рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
              </p>
            </div>
            <div className="single-table-2-2">
              <p>Подседельный Штырь</p>
              <p className="single-table-p">
                Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm
                900 Series: Carbon 2B SDS / 34.9mm
              </p>
            </div>
            <div className="single-table-1-2">
              <p>Седло</p>
              <p className="single-table-p">
                Ritchey WCS Streem V3 Titanium rails
              </p>
            </div>
            <div className="single-table-2-2">
              <p>Вилка</p>
              <p className="single-table-p">
                Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
                коническая рулевая труба / Удалённая блокировка, регулировка
                отскока / ход 100mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
