import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/cards/Card";
import "./Wishlist.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wishlist">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Избранные товары</p>
        </div>
        <div className="wishlist-all">
          <div className="wishlist-top">
            <h1>
              Избранные товары <sup>{wishList.length}</sup>
            </h1>
          </div>
          <div className="wishlist-bottom">
            {wishList.length ? (
              <Card data={wishList} />
            ) : (
              <div className="empty">
                <img
                  src="https://img.freepik.com/free-vector/flat-simple-buy-nothing-day-logo_742173-10787.jpg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
