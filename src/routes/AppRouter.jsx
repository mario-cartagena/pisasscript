import React from 'react'
import Login from '../pages/Login';
import Home from '../pages/Home';
import Search from '../pages/Search';
import DetailsPizza from '../pages/DetailsPizza';
import Cart from '../pages/Cart';
import Confirmation from '../pages/Confirmation';
import NotFound from '../../src/components/notFound/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path={"/"} element={<Login/>}>
            <Route path={"home"} element={<Home/>} />
            <Route path={"search"} element={<Search/>}>
              <Route path=':id' Component={<DetailsPizza/>} />
            </Route>
            <Route path={"cart"} element={<Cart/>} />
            <Route path={"confirmation"} element={<Confirmation/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default AppRouter;