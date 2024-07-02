import logo from './logo.svg';
import './App.css';
import Navbar from "./customer/componenets/navigation/navigation.jsx"
import Home from "./customer/pages/homepage/homepage.jsx"
import Footer from "./customer/componenets/Footer/Footer.jsx"
import Product from './customer/componenets/Product/product.jsx';
import Productdetails from './customer/componenets/productdetails/productdetails.jsx';
import Cart from './customer/componenets/cart/cart.jsx';
import Checkout from './customer/componenets/checkout/checkout.jsx';
import Order from './customer/componenets/order/order.jsx';
import Orderdetails from './customer/componenets/order/orderdetails.jsx';
import { Route, Routes } from 'react-router-dom';
import Customerrouter from './routers/customerrouter.jsx';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<Customerrouter />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
