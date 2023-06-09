import React, { useEffect, useState } from "react";
import Header from "../components/home/header/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { NavLink } from "react-router-dom";
import { getPizzas } from "../services/getPizzas";
import Footer from "../components/home/footer/footer"

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        getPizzas().then((data) => {
        setPizzas(data);
        });
    }, []);

    const formatPriceCard = (price) => price.toLocaleString("es-ES", {style: "decimal", minimunFractionDigits: 0, });

  return (
    <section className="home">
        <Header/>
        <div className="title">
            <span><b>Pizzas disponibles</b></span>
            <a>Ver todas</a>
        </div>
        <div className="body">
            <Carousel centerSlidePercentage={60} showIndicators={false} centerMode showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false}>
              <div className="offer">
                <p>Cupón para Frontends</p>
                <h1><b>45% OFF</b></h1>
              </div>
              <div className="offer">
                <p>Cupón para css</p>
                <h1><b>25% OFF</b></h1>
              </div>
            </Carousel>
            {
                    pizzas.map((pizzas, index)=>(
                        <Carousel className="carousel" showArrows={false} showThumbs={false} showStatus={false} key={index}>
                            <NavLink
                                to={`/pizzas/${pizzas.id}`}
                                state={pizzas}
                            >
                                <div className="item-carousel">
                                    <img src={pizzas.img.one} className="carrousel_pics"/>
                                    <div className="description">
                                        <p><b>{pizzas.name}</b></p>
                                        <span className="price"><b>${formatPriceCard(pizzas.price)}</b> COP</span>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink
                                to={`/pizzas/${pizzas.id}`}
                                state={pizzas}
                            >
                                <div className="item-carousel">
                                    <img src={pizzas.img.two} className="carrousel_pics"/>
                                    <div className="description">
                                        <p><b>{pizzas.name}</b></p>
                                        <span className="price"><b>${formatPriceCard(pizzas.price)}</b> COP</span>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink
                                to={`/pizzas/${pizzas.id}`}
                                state={pizzas}
                            >
                                <div className="item-carousel">
                                    <img src={pizzas.img.three} className="carrousel_pics"/>
                                    <div className="description">
                                        <p><b>{pizzas.name}</b></p>
                                        <span className="price"><b>${formatPriceCard(pizzas.price)}</b> COP</span>
                                    </div>
                                </div>
                        </NavLink>
                    </Carousel>
                ))
            }
        </div>
        <Footer />
    </section>
  );
};

export default Home;