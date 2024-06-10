import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <div className="container">
          <div className="breadcumb">
            <NavLink to={"/"}>
              <p className="breadcumb-1">Главная</p>
            </NavLink>
            <IoIosArrowForward />
            <p className="breadcumb-2">Контакты</p>
          </div>
          <div className="contact-all">
            <div className="contact-left">
              <h1>Контакты</h1>
            </div>
            <div className="contact-right">
              <p className="navbar-1-number">8 (800) 890-46-56</p>
              <p>
                Пн-Пт: 10:00 до 19:00
                <br />
                Сб-Вс: заказ через корзину
                <br />
                Телефоны: 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container-big">
          <div className="contact-bottom-all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253112!2d69.20123767587322!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1717700067372!5m2!1sen!2s"
              width="100%"
              height="550"
              loading="lazy"
            ></iframe>
            <div className="contact-modul">
              <div className="contact-modul-1">
                <p className="contact-modul-title">Адрес магазина</p>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </div>
              <div className="contact-modul-1">
                <p className="contact-modul-title">Почта</p>
                <p>NORNLIGHT@mail.ru</p>
              </div>
              <div className="contact-modul-1">
                <p className="contact-modul-title">Телефон</p>
                <p>8 (800) 890-46-56</p>
              </div>
              <div className="contact-modul-2">
                <button>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
