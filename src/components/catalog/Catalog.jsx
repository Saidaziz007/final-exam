import React from "react";
import "./Catalog.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CATALOG_ITEMS } from "../../static";

const Catalog = () => {
  return (
    <div className="catalog-all">
      <div className="catalog-top">
        <h1>Каталог</h1>
        <button>
          Весь каталог <FaArrowRightLong />
        </button>
      </div>
      <div className="catalog-wrapper">
        {CATALOG_ITEMS?.map((el) => (
          <div key={el.id} className="catalog-card">
            <div className="catalog-card-left">
              <h2>{el.title}</h2>
              <button>
                От {el.price}₽ <FaArrowRightLong />
              </button>
            </div>
            <div className="catalog-card-right">
              <img src={el.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
