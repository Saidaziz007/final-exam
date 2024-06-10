import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound-all">
          <h1>404</h1>
          <p>Похоже, ничего не нашлось :(</p>
          <Link to={"/"}>
            <button>На главную</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
