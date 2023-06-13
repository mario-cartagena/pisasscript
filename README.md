# PisasScript | Workshop 5
## Descripción del desarrollo: 
El objetivo del proyecto es construir un aplicativo web para la compra de pizzas con registro de usuario e inicio de sesión, enfoque en vista mobile.

### Vista propuesta mobile:
![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/ea5acce7-73fc-4698-b735-5a31c4bf839f)


### Vista propuesta desktop:
![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/e88e1613-d16c-4b4f-a7b9-d41e13a0f68d)


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

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/2683ebb1-60fd-4df6-b4fa-f9d4a1778f21)

-Al aprobar las validaciones correspondientes se notifica el ingreso de sesión y se direcciona al usuario a la vista home, en la cual puede visualizar un saludo personalizando y su imagen de avatar o iniciales de su nombre y apellido si no se proporciona imagen. Al hacer click sobre ella puede visualizar un menú que ofrece el cierre de sesión.

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/0c8b3226-96d8-444d-925d-da28f93b057c)

-Asi tambien puede visualizar las pizzas disponibles, con su identificación de tres imagenes, el titulo de la pizza y el precio.

-En el menú de la barra inferior puede encontrar los botones para dirigirse al buscador, al carrito o regresar al home.

-Si el usuario escoge la opción de buscar, se dirige a una pagina donde dispone de un buscador el cual le permite encontrar las coincidencias por nombre o tipo de pizza.

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/61d053f6-65f0-4354-8de3-0bb3d95e39d6)
![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/f4aed3df-2865-45ce-8b55-c079c114f366)

-Al dar click sobre las imagenes, tanto en el home como en el search, el usuario es redirigido a una vista de detalle, donde puede visualizar el nombre, la descripcion, precio comentarios de la pizza y a su vez agregar a la canasta la cantidad de pizzas deseas.

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/358245e0-82cd-40c9-91c6-ef3602d7ccc7)

-Cuando se confirma el pagar, el usuario es notificado de la cantidad y pizza agregada y se dirige a la vista de carrito, en la cual visualiza un resumen de su pedido, a través de una imagen, cantidad total y precio total.

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/e227835d-5922-455f-a48c-1440891cdcd2)


-En esta seccion de carrito el usuario puede diligenciar sus datos personales y de pago, gracias a un formulario implementado con formik y sus respectivas validaciones con yup.

-Cuando el usuario haya confirmado el pago, se redirecciona a una página de pedido exitoso.

![image](https://github.com/mario-cartagena/pisasscript/assets/102397960/ffb4df22-d740-4450-aedb-527ed4231d85)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
