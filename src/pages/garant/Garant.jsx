import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Garant.css";

const Garant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="garant">
      <div className="container">
        <div className="breadcumb">
          <NavLink to={"/"}>
            <p className="breadcumb-1">Главная</p>
          </NavLink>
          <IoIosArrowForward />
          <p className="breadcumb-2">Доставка и оплата</p>
        </div>
        <div className="garant-all">
          <div className="garant-left">
            <h1>Гарантии</h1>
          </div>
          <div className="garant-right">
            <h2>Обмен и возврат по желанию покупателя</h2>
            <p>
              Все товары в магазине «NornLight» имеют гарантию. Она заявляется
              производителем и имеет определенный срок действия на различные
              группы товаров. Если ваше изделие вышло из строя в
              течение гарантийного срока вы можете обратиться к нам и получить
              бесплатный ремонт. Для этого нужно
            </p>
            <ul>
              <li>
                Предоставить чек, накладную или сообщить почту или номер
                телефона, указанные при оформлении заказа.
              </li>
              <li>
                Привезти товар к нам на склад или отправить его транспортной
                компанией.
              </li>
              <li>
                После товар отправляется на экспертизу и ремонт. Если ремонт
                невозможен, мы обменяем изделие на аналогичное либо вернем
                деньги за покупку.
              </li>
            </ul>
            <p>
              Обращаем внимание, что «А-Свет» не является сервисным центром, а
              выполняет роль посредника между клиентом и поставщиком.
            </p>
            <p>
              Поэтому сроки проведения ремонта могут отличаться для товаров
              различных брендов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garant;
