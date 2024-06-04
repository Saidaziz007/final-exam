import React from "react";
import Banner from "../../components/hero-banner/Banner";
import "./Home.css";
import Catalog from "../../components/catalog/Catalog";
import WhyAbout from "../../components/about/WhyAbout";
import Card from "../../components/cards/Card";
import { useGetProductsQuery } from "../../context/productApi";
import { FaArrowRightLong } from "react-icons/fa6";
import brands1 from "../../assets/images/brands1.svg";
import brands2 from "../../assets/images/brands2.svg";
import brands3 from "../../assets/images/brands3.svg";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  const { data } = useGetProductsQuery();
  return (
    <main>
      <section className="hero">
        <div className="container-big">
          <div className="banner-all">
            <Banner />
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <Catalog />
        </div>
      </section>
      <section className="about-comp">
        <div className="container">
          <WhyAbout />
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="catalog-top">
            <h1>Популярные товары</h1>
            <button>
              Все товары <FaArrowRightLong />
            </button>
          </div>
          <div className="products-wrapper">
            <Card data={data} />
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="container">
          <div className="catalog-top">
            <h1>Только проверенные бренды</h1>
          </div>
          <div className="brands-wrapper">
            <img src={brands1} alt="" />
            <img src={brands2} alt="" />
            <img src={brands3} alt="" />
            <img src={brands1} alt="" />
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="catalog-top">
            <h1>Блог</h1>
            <button>
              Перейти в блог <FaArrowRightLong />
            </button>
          </div>
          <div className="blog-wrapper">
            <div className="blog-card">
              <div className="blog-card-img">
                <img src={blog1} alt="" />
              </div>
              <div className="blog-card-info">
                <div className="blog-card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog-card-info">
                <div className="blog-card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog-card-info">
                <div className="blog-card-title">
                  <h2>Как правильно освещать дом снаружи?</h2>
                  <GoArrowUpRight />
                </div>
                <p>01.01.2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="production">
        <div className="container">
          <div className="production-all">
            <div className="production-left">
              <h1>Производство светильников</h1>
            </div>
            <div className="production-right">
              <p>
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
              </p>
              <br />
              <p>
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
