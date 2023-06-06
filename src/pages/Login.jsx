import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getUsers } from '../../src/services/getUsers';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './styleLogin.scss'
import { useNavigate } from 'react-router-dom';
import RegisterUser from '../components/login/RegisterUser';


const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required('').min(8, 'Password must be at least 8 characters').max(20, 'Password must be at most 20 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      console.log(response)
      setUsers(response)
    })
  }, [])

  const validateUser = (values) => {
    console.log(users)
    return users.some((user) => user.username === values.username && user.password === values.password);
  }

  const [showRegister, setShowRegister] = useState(false);

  const handleOpenRegister = () => {
    console.log('click en register');
    setShowRegister(true);
  };
 
  return (
    <>
      {showRegister ? ( <RegisterUser />)
      : (
    <div className='form'>
    <Row>
      <Col sm={12} md={8}>
      <div className='form__content'>
        <figure className='form__figure'>
          <img src="https://cdn-icons-png.flaticon.com/128/599/599995.png" alt="" className='form__icon' />
        </figure>
        <h2>PisassScript</h2>
        <p className='form__title'>Inicia sesión en tu cuenta</p>
        <p className='form__title__paragrapho mb-4'>Disfruta de la mejor Pizza creada para las personas amantes del Código</p>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            alert(values.username)
            const isValidUser = validateUser(values);
            console.log(isValidUser);
            if (isValidUser) {
              navigate('/home');
            }

          }}
          initialValues={{
            username: '',
            password: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} >
              <Row className="mb-1 form__login" >
                <div >
                  <FontAwesomeIcon icon={faUser} className='form__login__icon' />
                </div>
                <div >
                  <InputGroup className="mb-1">
                    <Form.Group controlId="validationFormik01">
                      {/* <Form.Label>First name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder='Usuario'
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        className='form__login__input'
                        autoComplete="off"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </InputGroup>
                </div>
              </Row>

              <Form.Group className="mb-1" controlId="validationFormik02">
                <Row className="mb-1 form__login">
                  <div >
                    <FontAwesomeIcon icon={faLock} className='form__login__icon' />

                  </div>
                  <div >
                    <Form.Control type="password"
                      placeholder="Contraseña"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={!!errors.password}
                      className='form__login__input'
                      autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </div>
                </Row>
              </Form.Group>


              <Button type="submit" className='form__login__btn'>Iniciar sesión</Button>
              <div className='form__login__registration'>
                <p className='mt-3 mb-4 form__login__registration__reestablecer'>Restablecer contraseña</p>
                <p>¿No tienes una cuenta?</p>
                <p className='form__login__registration__log' onClick={handleOpenRegister}>Registrate aqui</p>
             
              </div>
            </Form>
          )}
        </Formik>
      </div >
      </Col>
      </Row>
      </div >
      )}
    </>
  )
}

export default Login