import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/images/why-1.svg";
import "./WhyAbout.css";
import { ABOUT_CARDS } from "../../static";
import { Link } from "react-router-dom";

const WhyAbout = () => {
  return (
    <div className="about-comp-all">
      <div className="catalog-top">
        <h1>Почему NORNLIGHT?</h1>
        <Link to={"/about"}>
          <button>
            О компании <FaArrowRightLong />
          </button>
        </Link>
      </div>
      <div className="about-comp-wrapper">
        {ABOUT_CARDS?.map((el) => (
          <div key={el.id} className="about-comp-card">
            <div className="about-comp-img">
              <img src={el.img} alt="" />
            </div>
            <div className="about-comp-info">
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="catalog-btn-res">
        Весь каталог <FaArrowRightLong />
      </button>
    </div>
  );
};

export default WhyAbout;
