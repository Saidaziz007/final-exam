import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Basket.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decCart,
  incCart,
  removeFromCart,
} from "../../context/cartSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Корзина</p>
        </div>
        <div className="cart-top">
          <h1>
            Корзина <sup>{cart.length}</sup>
          </h1>
          <div className="cart-con">
            <div className="cart-con-top">
              <p>Фото</p>
              <p>Товары</p>
              <p>Описание</p>
              <p>Артикул</p>
              <p>Количество</p>
            </div>
            <hr />
            {cart.map((el) => (
              <div key={el.id} className="cart-con-info">
                <img src={el.url[0]} alt="" />
                <div className="cart-con-title">
                  <p>{el.title}</p>
                  <p>{el.price}₽</p>
                </div>
                <p className="cart-opisaniye">{el.description}</p>
                <p className="cart-artikul">
                  RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                </p>
                <div className="cart-con-quantity">
                  <button>-</button>
                  <p>{el.quantity}</p>
                  <button>+</button>
                </div>
                <button
                  className="cart-delete"
                  onClick={() => dispatch(removeFromCart(el))}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
          </div>
          {cart.map((el) => (
            <div key={el.id} className="cart-res">
              <div className="cart-res-left">
                <img src={el.url[0]} alt="" />
              </div>
              <div className="cart-res-right">
                <p className="cart-title">{el.title}</p>
                <p className="cart-price">{el.price}₽</p>
                <p className="cart-opisaniye">{el.description}</p>
                <p className="cart-artikul">
                  RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                </p>
                <div className="cart-con-quantity">
                  <div className="cart-res-btns">
                    <button>-</button>
                    <p>{el.quantity}</p>
                    <button>+</button>
                  </div>
                  <button
                    className="cart-res-delete"
                    onClick={() => dispatch(removeFromCart(el))}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-center">
          <div className="cart-center-title">
            <h1>Оформление</h1>
            <div className="cart-info-inputs">
              <input type="text" placeholder="ФИО" />
              <input type="text" placeholder="Телефон" />
              <input type="text" placeholder="Электронная почта" />
            </div>
            <hr />
            <div className="cart-shopping">
              <input type="text" placeholder="Адрес доставки" />
              <textarea
                name=""
                id=""
                rows={10}
                placeholder="Комментарий"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="cart-bottom">
          <div className="cart-payment">
            <h1>Оплата</h1>
            <div className="cart-delivery-price">
              <p>Товары.............................................29830</p>
              <p>Доставка..............................................89093</p>
            </div>
            <p>28403</p>
            <div className="cart-order">
              <button>Купить</button>
              <p>Я согласен наобработку моих персональных данных</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
