import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../context/productApi";
import Card from "../../components/cards/Card";
import "./AllProducts.css";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AllProducts = () => {
  const { data } = useGetProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="all-products">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Все товары</p>
        </div>
        <h1>Все товары</h1>
        <div className="products-wrapper">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
