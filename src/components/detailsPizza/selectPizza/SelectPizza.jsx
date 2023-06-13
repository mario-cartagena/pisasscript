import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectPizza = ({ pizzaFound }) => {
    const [count, setCount] = useState(0);
    const { updateOrderPizza, orderPizza } = useContext(AppContext);
    const navigate = useNavigate();

    const handlePay = () => {
        if (count >= 1) {
            const orderPizzaDetails = {
                pizza: pizzaFound,
                quantityPizza: count,
            }
            console.log(orderPizzaDetails);
            updateOrderPizza(orderPizzaDetails);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `¡Se agregó ${count}  ${pizzaFound?.name}!`,
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                navigate('/cart');
              });
            
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: '¡No has agregado una pizza!',
                showConfirmButton: false,
                timer: 1500
              })
            console.log('no has seleccionado pizza');
        }
    }
    console.log(orderPizza);


    return (
        <Box
            sx={{
                color: 'action.active',
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                    marginBottom: 2,
                },
                '& .MuiBadge-root': {
                    marginRight: 4,
                },
            }}
        >
            <div className='container__quantity'>

                <ButtonGroup>
                    <p className='container__quantity--decrement'
                        aria-label="reduce"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </p>
                    <p className='container__quantity--count'>{count}</p>
                    <p className='container__quantity--increment'
                        aria-label="increase"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        <AddIcon fontSize="small" />
                    </p>
                </ButtonGroup>
                <div className='basket__counter'>
                    <Badge className='basket__badge' badgeContent={count}>
                        <FontAwesomeIcon icon={faBasketShopping} className='basket__icon' />
                    </Badge>
                </div>
                <button className='btn__pay' onClick={handlePay}>
                    <p className='btn__pay__name'>Pagar</p>
                </button>
            </div>

        </Box>
    );
}

export default SelectPizza