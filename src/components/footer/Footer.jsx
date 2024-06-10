import React from "react";
import logo from "../../assets/images/logo-all.svg";
import payment from "../../assets/images/footer-payment.svg";
import { FaFacebookF, FaInstagram, FaVk } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-all">
          <div className="footer-1">
            <img src={logo} alt="" />
            <p className="navbar-1-number">8 (800) 890-46-56</p>
            <img src={payment} alt="" />
            <p className="navbar-1-order-call">Политика конфидециальности</p>
            <p className="navbar-1-order-call">Пользовательское соглашение</p>
            <div className="footer-media">
              <FaVk />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer-2">
            <p>Покупателям</p>
            <ul>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Гарантии</li>
              <li>Контакты</li>
              <li>Блог</li>
            </ul>
          </div>
          <div className="footer-2">
            <p>Товары</p>
            <ul>
              <li>Люстры</li>
              <li>Светильники</li>
              <li>Бра</li>
              <li>Торшеры</li>
              <li>Комплектуюшие</li>
              <li>Настольные лампы</li>
            </ul>
          </div>
          <div className="footer-2">
            <ul>
              <li>Споты</li>
              <li>Трековые светильники</li>
              <li>Уличные светильники</li>
              <li>Технические светильники</li>
              <li>Светодиодные ленты</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
