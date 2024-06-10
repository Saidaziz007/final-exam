import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="delivery">
      <div className="delivery-top">
        <div className="container">
          <div className="breadcumb">
            <NavLink to={"/"}>
              <p className="breadcumb-1">Главная</p>
            </NavLink>
            <IoIosArrowForward />
            <p className="breadcumb-2">Доставка и оплата</p>
          </div>
          <div className="delivery-all">
            <div className="delivery-left">
              <h1>Доставка и оплата</h1>
            </div>
            <div className="delivery-right">
              <div className="delivery-con">
                <h2>Доставка</h2>
                <p>
                  Мы осуществляем доставку со склада по Москве и Московской
                  области собственной курьерской службой. Транспортными
                  компаниями нашу продукцию мы доставляем по всей территории РФ,
                  а так же по всем странам СНГ.{" "}
                  <span>Сроки доставки: 4—6 недель</span>
                </p>
              </div>
              <div className="delivery-con">
                <h2>Курьерская доставка</h2>
                <p>
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                  <span>от 5 000 ₽</span>.Заказы свыше <span>30 000 ₽</span>
                   имеют бесплатную доставку, включительно 15 км от МКАД
                </p>
              </div>
              <div className="delivery-con">
                <h2>Самовывоз</h2>
                <p>
                  Любой заказ можно забрать самостоятельно по адресу: г.
                  Москва, Дмитровское шоссе д.100с2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-bottom">
        <div className="container-big">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253112!2d69.20123767587322!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1717700067372!5m2!1sen!2s"
            width="100%"
            height="550"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
