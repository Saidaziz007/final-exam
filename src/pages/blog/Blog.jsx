import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Блог</p>
        </div>
        <div className="blog-all">
          <div className="blog-top">
            <h1>Блог</h1>
          </div>
          <div className="blog-wrapper-2">
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
      </div>
    </div>
  );
};

export default Blog;
