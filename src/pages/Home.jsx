import React, { useEffect, useState, useContext } from "react";
import { AppContext } from '../context/AppContext';
import Header from "../components/home/header/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { NavLink } from "react-router-dom";
import { getPizzas } from "../services/getPizzas";
import Footer from "../components/home/footer/footer"
import Carrousel from "../components/home/carousel/Carrousel";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const {isLogged, userLogged} = useContext(AppContext);
    console.log(isLogged);
    console.log(userLogged);

    useEffect(() => {
        getPizzas().then((data) => {
        setPizzas(data);
        });
    }, []);

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
            <Carrousel/>
        </div>
        <Footer />
    </section>
  );
};

export default Home;