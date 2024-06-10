import React, { useEffect } from "react";
import Brands from "../../components/brands/Brands";
import BlogCard from "../../components/blog-component/BlogCard";
import "./About.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">О компании</p>
        </div>
        <div className="about-all">
          <div className="about-left">
            <h1>О компании</h1>
            <div className="about-card">
              <p className="about-card-title">170+</p>
              <p className="about-card-info">Товаров</p>
            </div>
            <div className="about-card">
              <p className="about-card-title">1000+</p>
              <p className="about-card-info">Довольных покупателей</p>
            </div>
            <div className="about-card">
              <p className="about-card-title">170+</p>
              <p className="about-card-info">Товаров</p>
            </div>
          </div>
          <div className="about-right">
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
        <div className="about-bottom">
          <Brands />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default About;
