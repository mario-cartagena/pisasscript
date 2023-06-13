import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as yup from "yup";
import { AppContext } from '../context/AppContext';

const Cart = () => {

  const navigate = useNavigate();
  const { updateOrderPizza, orderPizza, setOrderPizza } = useContext(AppContext);
  console.log(orderPizza)

  let totalPrice = (orderPizza.pizza.price)*(orderPizza.quantityPizza);

  const handleToDetails = () => {
    navigate(`/pizzas/${orderPizza.pizza.id}`);
  };

  let initialValues = {
    name: "",
    cardNumber: "",
    date: "",
    cvv: "",
    address: ""
  }

  const sendForm = (data) => {
    console.log(data)
    navigate("/confirmation")
  }

  const schema = yup.object({
    name: yup.string()
      .required("El nombre completo es requerido.")
      .matches(/^[a-zA-Z\s]+$/, "El nombre completo debe contener solo letras.")
      .min(3, 'El nombre completo debe tener al menos 3 letras.'),
    cardNumber: yup.string()
      .required("El número de tarjeta de crédito es requerido.")
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "El número de tarjeta de crédito debe tener el formato XXXX XXXX XXXX XXXX.")
      .min(16, 'El número de tarjeta debe tener al menos 16 números.'),
    date: yup.string()
      .required("La fecha de vencimiento es requerida."),
    cvv: yup.string()
      .required("El código CVV es requerido.")
      .matches(/^\d+$/, "El código CVV debe contener solo números.")
      .min(3, 'El código CVV debe tener al menos 3 números.')
      .max(3, 'El código CVV no debe exceder los 3 números.'),
    address: yup.string()
      .required("La dirección es requerida.")
      .matches(/^[a-zA-Z0-9\s\.,#-]+$/)
  });

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: sendForm,
  });


  return (
    <>
    {/* {orderPizza.map((item)=>( */}
      <div className='cart'>
        <div className="cart__title">
          <span className='icono' onClick={handleToDetails}><FontAwesomeIcon icon={faChevronLeft} style={{ color: "#a52a49" }} /></span>
          <p>Carrito de compras</p>
        </div>
        <div className="cart__card">
          <figure>
            <img src={orderPizza.pizza.img.one} alt={orderPizza.pizza.name} />
          </figure>
          <div className="cart__right">
            <div className="cart__product">
              <span className='title'>{orderPizza.pizza.name}</span>
            </div>
            <div className="cart__aditional">
              <span>x{orderPizza.quantityPizza}</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
        <div className="cart__form">
          <span className='title__form'>Información de pago</span>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  className="input__form"
                  onChange={handleChange}
                  value={values.name}
                  isInvalid={touched.name && errors.name}
                />
                {touched.name && errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Número de Tarjeta de Crédito</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  className="input__form"
                  onChange={handleChange}
                  value={values.cardNumber}
                  isInvalid={touched.cardNumber && errors.cardNumber}
                />
                {touched.cardNumber && errors.cardNumber && <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>}
              </Form.Group>
              <div className="d-flex align-items-center">
                <Form.Group as={Col} xs="6" md="3" controlId="validationCustom03">
                  <Form.Label>Fecha vencimiento</Form.Label>
                  <Form.Control
                    type="month"
                    name="date"
                    placeholder="MM/YY"
                    className="input__form"
                    onChange={handleChange}
                    value={values.date}
                    isInvalid={touched.date && errors.date}
                  />
                  {touched.date && errors.date && <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group as={Col} xs="6" md="3" controlId="validationCustom04">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    placeholder='123'
                    className="input__form"
                    onChange={handleChange}
                    value={values.cvv}
                    isInvalid={touched.cvv && errors.cvv}
                  />
                  {touched.cvv && errors.cvv && <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>}
                </Form.Group>
              </div>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Av. Morelos #123"
                  className="input__form"
                  onChange={handleChange}
                  value={values.address}
                  isInvalid={touched.address && errors.address}
                />
                {touched.address && errors.address && <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>}
              </Form.Group>
            </Row>
            <button type="submit" className='btn__payment'>Pagar Ahora</button>
          </Form>
        </div>
      </div>
    {/* ))} */}
    </>
  )
}

export default Cart;
