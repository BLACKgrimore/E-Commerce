import React from 'react';
import Navbar from "../customer/componenets/navigation/navigation.jsx"
import Home from "../customer/pages/homepage/homepage.jsx"
import Footer from "../customer/componenets/Footer/Footer.jsx"
import Product from '../customer/componenets/Product/product.jsx';
import Productdetails from '../customer/componenets/productdetails/productdetails.jsx';
import Cart from '../customer/componenets/cart/cart.jsx';
import Checkout from '../customer/componenets/checkout/checkout.jsx';
import Order from '../customer/componenets/order/order.jsx';
import Orderdetails from '../customer/componenets/order/orderdetails.jsx';
import { Route, Routes } from 'react-router-dom';
// import Customerrouter from './routers/customerrouter.jsx';

function Customerrouter() {
  return (
    <div>

      <div>
        <Navbar />
      </div>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:lavel0ne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<Productdetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<Orderdetails/>}></Route>

      </Routes>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Customerrouter;
