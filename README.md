# PisasScript | Workshop 5
## Descripción del desarrollo: 
El objetivo del proyecto es construir un aplicativo web para la compra de pizzas con registro de usuario e inicio de sesión, enfoque en vista mobile.

### Vista propuesta mobile:
![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/32fa667b-2d5d-4aa5-aaab-fe8530707624)

***Herramientas y librerias implementadas*** 
1. Librería JavaScript React js
2. Diseño responsive
3. Enrutamiento dinámico
4. Componentes funcionales
5. Hooks de estado, efecto, personalizados y de React Router.
6. Peticiones HTTPs con Axios
7. Implementación de JSON server (API)
8. Implementación de Sweetalert para mostrar las alertas.
9. Despliegue del aplicativo en vercel y heroku


### Flujo de la aplicación:

-Para acceder al menu principal es necesario el  inicio de sesión con email y contraseña, si no se tiene una cuenta se dirige a la sección de registro para la creación de un nuevo usuario con los datos requeridos; imagen o avatar de perfil, nombre de usuario, nombre completo y contraseña cada formulario cuenta con sus respectivas validaciones empleando la libreria yup y formik.

![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/32fa667b-2d5d-4aa5-aaab-fe8530707624)

-Al aprobar las validaciones correspondientes se notifica el ingreso de sesión y se direcciona al usuario a la vista home, en la cual puede visualizar un saludo personalizando y su imagen de avatar o iniciales de su nombre y apellido si no se proporciona imagen. Al hacer click sobre ella puede visualizar un menú que ofrece el cierre de sesión.

![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/8720100f-a76b-40e3-8a1d-fe87153f6212)
![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/fb1e50ec-78cb-414c-9b35-89ef82ce9c5d)

-Asi tambien puede visualizar las pizzas disponibles, con su identificación de tres imagenes, el titulo de la pizza y el precio.

-En el menú de la barra inferior puede encontrar los botones para dirigirse al buscador, al carrito o regresar al home.

-Si el usuario escoge la opción de buscar, se dirige a una pagina donde dispone de un buscador el cual le permite encontrar las coincidencias por nombre o tipo de pizza.

![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/1de56e5f-4f89-494a-a31a-799c4d0f963c)
![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/ea2ebed3-73d2-471d-b5b1-691c168434a2)

-Al dar click sobre las imagenes, tanto en el home como en el search, el usuario es redirigido a una vista de detalle, donde puede visualizar el nombre, la descripcion, precio comentarios de la pizza y a su vez agregar a la canasta la cantidad de pizzas deseas.

![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/6e52d962-a30a-4eac-bc4c-0872b440f800)

-Cuando se confirma el pagar, el usuario es notificado de la cantidad y pizza agregada y se dirige a la vista de carrito, en la cual visualiza un resumen de su pedido, a través de una imagen, cantidad total y precio total.

![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/1df8d668-d836-4553-a13e-a856d68bdf2a)

-En esta seccion de carrito el usuario puede diligenciar sus datos personales y de pago, gracias a un formulario implementado con formik y sus respectivas validaciones con yup.

-Cuando el usuario haya confirmado el pago, se redirecciona a una página de pedido exitoso.
![image](https://github.com/mario-cartagena/pisasscript/assets/125515961/6c2a3c5d-4faf-4f22-9a0e-9a72c17b5641)

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/ffb4df22-d740-4450-aedb-527ed4231d85)

