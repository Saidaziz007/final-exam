import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-all.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { LuBarChart, LuMenu } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const API_URL =
  "https://6634b1ce9bb0df2359a2693f.mockapi.io/saidaziz-api/products";

const Header = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  let handleSearch = (data) => {
    return data?.filter((pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase().trim())
    );
  };
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
              <LuMenu />
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div className="navbar-2-catalog">
              <button>
                <RiMenu2Line />
                <p>Каталог</p>
              </button>
            </div>
            <div className="navbar-2-search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Поиск по товарам"
              />
              {search.trim() ? (
                <ul className="nav-search">
                  {search.trim() ? (
                    handleSearch(data).length ? (
                      handleSearch(data)?.map((el) => (
                        <div key={el.id} className="nav-result">
                          <img src={el.url[0]} alt="" />
                          <li>{el.title}</li>
                        </div>
                      ))
                    ) : (
                      <div className="nav-search-empty">
                        <img
                          src="https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
                          alt=""
                        />
                      </div>
                    )
                  ) : (
                    <></>
                  )}
                </ul>
              ) : (
                <></>
              )}
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
            <div className="navbar-2-items-res">
              <NavLink to={"/wishlist"}>
                <FaRegHeart />
              </NavLink>
              <NavLink to={"/basket"}>
                <FiShoppingCart />
              </NavLink>
            </div>
          </div>
          <div className="navbar-2-search-res">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Поиск по товарам"
            />
            {search.trim() ? (
              <ul className="nav-search">
                {search.trim() ? (
                  handleSearch(data).length ? (
                    handleSearch(data)?.map((el) => (
                      <div key={el.id} className="nav-result">
                        <img src={el.url[0]} alt="" />
                        <li>{el.title}</li>
                      </div>
                    ))
                  ) : (
                    <div className="nav-search-empty">
                      <img
                        src="https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
                        alt=""
                      />
                    </div>
                  )
                ) : (
                  <></>
                )}
              </ul>
            ) : (
              <></>
            )}
            <IoMdSearch />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
