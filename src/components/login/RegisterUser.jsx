import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../pages/styleLogin.scss'
import Login from '../../pages/Login';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/createUser';
import AvatarUpload from './uploadImage/AvatarUpload';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const RegisterUser = () => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState('');


  const schema = yup.object().shape({
    username: yup.string().required(),
    fullName: yup.string().required(),
    password: yup.string().required('').min(8, 'Password must be at least 8 characters').max(20, 'Password must be at most 20 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });


  const [showLogin, setShowLogin] = useState(false);
  const { setIsLogged } = useContext(AppContext);

  const handleOpenLogin = () => {
    console.log('click en Login');
    setShowLogin(true);
  };


  return (
    <>
      {showLogin ? (<Login />)
        : (
          <div className='form'>
            <Row>
              <Col sm={12}>
                <div className='form__content'>
                  <p className='form__title__register'>Regístrate</p>
                  <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                      values.avatarUrl = avatarUrl; // Asigna el valor de avatarUrl al objeto values
                      console.log(values)
                      createUser(values);
                      setIsLogged(true)

                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })

                      Toast.fire({
                        icon: 'success',
                        title: '¡Registro exitoso!'
                      }).then(() => {
                        navigate('/home');
                      });

                    }}
    
                    initialValues={{
                      avatarUrl: '',
                      fullName: '',
                      username: '',
                      password: '',
                    }}
                  >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                      <Form noValidate onSubmit={handleSubmit} >

                        <AvatarUpload setAvatarUrl={setAvatarUrl} className='avatar__upload' />

                        <Row className="mb-4 form__login" >
                          <div >
                            <FontAwesomeIcon icon={faUser} className='form__login__icon' />
                          </div>
                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik05">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                  type="text"
                                  name="fullName"
                                  placeholder='Nombre completo'
                                  value={values.fullName}
                                  onChange={handleChange}
                                  isValid={touched.fullName && !errors.fullName}
                                  className='form__login__input'
                                  autoComplete="off"
                                />
                                <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                            </InputGroup>
                          </div>
                        </Row>



                        <Row className="mb-4 form__login" >
                          <div >
                            <FontAwesomeIcon icon={faUser} className='form__login__icon' />
                          </div>
                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik04">
                                <Form.Control
                                  type="text"
                                  name="username"
                                  placeholder='Nombre de Usuario'
                                  value={values.username}
                                  onChange={handleChange}
                                  isValid={touched.username && !errors.username}
                                  className='form__login__input'
                                  autoComplete="off"
                                />
                                <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                            </InputGroup>
                          </div>
                        </Row>

                        <Form.Group className="mb-1" controlId="validationFormik07">
                          <Row className="mb-4 form__login">
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
                              <Form.Control.Feedback type="invalid" className='form__login__errors'>
                                {errors.password}
                              </Form.Control.Feedback>
                            </div>
                          </Row>
                        </Form.Group>


                        <Button type="submit" className='form__login__btn'>Registrarme</Button>
                        <div className='form__login__registration'>
                          <p className='form__login__registration__log' onClick={handleOpenLogin}>Inicia Sesión</p>
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

export default RegisterUser