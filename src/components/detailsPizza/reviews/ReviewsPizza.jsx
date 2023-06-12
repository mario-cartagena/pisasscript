import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ReviewsPizza = ({ pizzaFound }) => {

    function formatReviewDateToAgo(dateString) {
        // Obtén la fecha actual
        const currentDate = new Date();
      
        // Crea una fecha a partir del formato "dd/mm/yyyy"
        const inputDateParts = dateString.split('/');
        const inputDate = new Date(
          inputDateParts[2],
          inputDateParts[1] - 1,
          inputDateParts[0]
        );
      
        // Calcula la diferencia en milisegundos entre las dos fechas
        const differenceInMs = currentDate - inputDate;
      
        // Convierte la diferencia en días
        const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      
        // Crea el string en el formato "Xd ago"
        const formattedDate = `${differenceInDays}d ago`;
      
        return formattedDate;
      }
    
    return (
        pizzaFound?.reviews.map((review) => (
        <div className='reviews'>
            <figure className='reviews__avatar__img'>
                <img src={review.avatar} alt="" />
            </figure>
            <article className='reviews__content'>
                <div className='reviews__content__user-date'>
                <p className='reviews__content__user'>{review.user}</p>
                <p className='reviews__content__date'>{formatReviewDateToAgo(review.date)}</p>
                </div>
                <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={review.stars} precision={0.5} readOnly />
                </Stack>
                <p className='reviews__content__review'>{review.review}</p>
            </article>
        </div>
        ))
    )
}

export default ReviewsPizza