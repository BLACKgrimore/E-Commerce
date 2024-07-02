import logo from './logo.svg';
import './App.css';
import Navbar from "./customer/componenets/navigation/navigation.jsx"
import Home from "./customer/pages/homepage/homepage.jsx"
import Footer from "./customer/componenets/Footer/Footer.jsx"
import Product from './customer/componenets/Product/product.jsx';
import Productdetails from './customer/componenets/productdetails/productdetails.jsx';
import Cart from './customer/componenets/cart/cart.jsx';
import Checkout from './customer/componenets/checkout/checkout.jsx';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <Productdetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
