import React, { useEffect, useState } from "react";
import { getPizzas } from "../../../services/getPizzas";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";


const Carrousel = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas().then((data) => {
      setPizzas(data);
    });
  }, []);
  
  const formatPriceCard = (price) => price.toLocaleString("es-ES", {style: "decimal", minimunFractionDigits: 0, });

  return (
    <>
      {pizzas.map((pizzas, index) => (
        <Carousel
          className="carousel"
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          key={index}
        >
          <NavLink to={`/pizzas/${pizzas.id}`} state={pizzas}>
            <div className="item-carousel">
              <img src={pizzas.img.one} className="carrousel_pics" />
              <div className="description">
                <p>
                  <b>{pizzas.name}</b>
                </p>
                <span className="price">
                  <b>${formatPriceCard(pizzas.price)}</b> COP
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink to={`/pizzas/${pizzas.id}`} state={pizzas}>
            <div className="item-carousel">
              <img src={pizzas.img.two} className="carrousel_pics" />
              <div className="description">
                <p>
                  <b>{pizzas.name}</b>
                </p>
                <span className="price">
                  <b>${formatPriceCard(pizzas.price)}</b> COP
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink to={`/pizzas/${pizzas.id}`} state={pizzas}>
            <div className="item-carousel">
              <img src={pizzas.img.three} className="carrousel_pics" />
              <div className="description">
                <p>
                  <b>{pizzas.name}</b>
                </p>
                <span className="price">
                  <b>${formatPriceCard(pizzas.price)}</b> COP
                </span>
              </div>
            </div>
          </NavLink>
        </Carousel>
      ))}
    </>
  );
};

export default Carrousel;
