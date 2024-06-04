import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-all.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { LuBarChart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="navbar-1">
        <div className="container">
          <div className="navbar-1-all">
            <ul className="navbar-1-list">
              <li className="navbar-1-item">
                <NavLink to={"/about"}>О компании</NavLink>
              </li>
              <li className="navbar-1-item">
                <NavLink to={"/delivery"}>Доставка и оплата</NavLink>
              </li>
              <li className="navbar-1-item">
                <NavLink to={"/return"}>Возврат</NavLink>
              </li>
              <li className="navbar-1-item">
                <NavLink to={"/garant"}>Гарантии</NavLink>
              </li>
              <li className="navbar-1-item">
                <NavLink to={"/contact"}>Контакты</NavLink>
              </li>
              <li className="navbar-1-item">
                <NavLink to={"/blog"}>Блог</NavLink>
              </li>
            </ul>
            <div className="navbar-1-phone">
              <p className="navbar-1-number">8 (800) 890-46-56</p>
              <p className="navbar-1-order-call">Заказать звонок</p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar-2">
        <div className="container">
          <div className="navbar-2-all">
            <div className="navbar-2-logo">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div className="navbar-2-catalog">
              <button>
                <RiMenu2Line />
                Каталог
              </button>
            </div>
            <div className="navbar-2-search">
              <input type="text" placeholder="Поиск по товарам" />
              <IoMdSearch />
            </div>
            <div className="navbar-2-items">
              <NavLink to={"/wishlist"}>
                <FaRegHeart />
                Избранное
              </NavLink>
            </div>
            <div className="navbar-2-items">
              <NavLink to={"/not-found"}>
                <LuBarChart />
                Сравнение
              </NavLink>
            </div>
            <div className="navbar-2-items">
              <NavLink to={"/basket"}>
                <FiShoppingCart />
                Корзина
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
