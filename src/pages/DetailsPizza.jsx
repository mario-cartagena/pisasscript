import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import { AppContext } from '../context/AppContext';
import { getPizzas } from '../services/getPizzas';
import { useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewsPizza from '../components/detailsPizza/reviews/ReviewsPizza';
import SelectPizza from '../components/detailsPizza/selectPizza/SelectPizza';
import { Skeleton } from "@mui/material";
import Stack from '@mui/material/Stack';

const DetailsPizza = () => {

  const { id } = useParams();
  console.log('soy id de search:', id);
  
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();
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

  const goBack = () => {
    navigate('/home');
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
        {pizzaFound?.img ? 
          <Carousel className="carousel__details" showArrows={false} showThumbs={false} showStatus={false}>
            {Object.keys(pizzaFound.img).map((key) => (
              <><p className='carousel__back' onClick={goBack}> <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }} /> Todas las pizzas</p>
                <div
                  className="carousel__img"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(10,10,10) 0%, rgba(177,185,185,0) 80%) , url(${pizzaFound.img[key]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </>
            ))}
          </Carousel>
          : (
          <Stack spacing={1}>
          <Skeleton variant="rectangular" width={375} height={240} animation="wave" />
          </Stack>
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
      <SelectPizza pizzaFound={pizzaFound} />
    </section>
  );
};

export default DetailsPizza;