import { Footer, Header } from 'antd/es/layout/layout';
import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import { AppContext } from '../context/AppContext';
import { getPizzas } from '../services/getPizzas';
import { useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewsPizza from '../components/detailsPizza/reviews/ReviewsPizza';
import SelectPizza from '../components/detailsPizza/selectPizza/SelectPizza';

const DetailsPizza = () => {

  const { id } = useParams();
  console.log('soy id de search:', id);

  const [pizzas, setPizzas] = useState([]);
  const { isLogged, userLogged } = useContext(AppContext);
  console.log(isLogged);
  console.log(userLogged);

  useEffect(() => {
    getPizzas().then((data) => {
      setPizzas(data);
    });
  }, []);

  console.log(pizzas);


  const pizzaFound = pizzas.find((pizza) => pizza.id === Number(id));
  console.log(pizzaFound?.img?.one);

  const navigate = useNavigate();

  // ...

  // const goBack = () => {
  //   navigate(-1);
  // };
  const goBack = () => {
    const urlWithoutId = window.location.href.split('?')[0]; // Obtén la URL actual sin los parámetros
    window.history.replaceState({}, document.title, urlWithoutId); // Reemplaza la URL actual sin el parámetro
    window.history.back(); // Vuelve atrás en la historia del navegador
  };


  const formatPriceCard = (price) => {
    if (price) {
      return price.toLocaleString("es-ES", { style: "decimal", minimumFractionDigits: 0 });
    }
    return "";
  };


  return (
    <section className="details__container">
      <div className='carousel__details'>
        {pizzaFound?.img && (
          <Carousel className="carousel__details" showArrows={false} showThumbs={false} showStatus={false}>
            {Object.keys(pizzaFound.img).map((key) => (
              <><p className='carousel__back' onClick={goBack}> <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }} /> Todas las pizzas</p>
                <div
                  className="carousel__img"
                  style={{
                    backgroundImage: `linear-gradient(rgb(23 7 12 / 0%), rgb(23 7 12 / 80%)), url(${pizzaFound.img[key]})`,
                    backgroundSize: 'cover'
                  }}
                ></div>


              </>
            ))}
          </Carousel>
        )}
      </div>
      <div className='details__container__description'>
        <h3 className='details__title'>{pizzaFound?.name} </h3>
        <div className='details__price-rating'>
          <span className="price"><b>${formatPriceCard(pizzaFound?.price)}</b> COP</span>
          <span className="review"><b> <FontAwesomeIcon icon={faStar} /> {formatPriceCard(pizzaFound?.reviews.length)}</b> Reviews</span>
        </div>
        <p className='details__title__description'>Descripción</p>
        <p clasName='details__description'>{pizzaFound?.description}</p>
        <ReviewsPizza pizzaFound={pizzaFound} />

      </div>
        {/* <SelectPizza/> */}
        <SelectPizza pizzaFound={pizzaFound}/>
    </section>
  );
};

export default DetailsPizza;