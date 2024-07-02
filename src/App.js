import logo from './logo.svg';
import './App.css';
import Navbar from "./customer/componenets/navigation/navigation.jsx"
import Home from "./customer/pages/homepage/homepage.jsx"
import Footer from "./customer/componenets/Footer/Footer.jsx"
import Product from './customer/componenets/Product/product.jsx';
import Productdetails from './customer/componenets/productdetails/productdetails.jsx';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div>
        {/* <Home/> */}
        {/* <Product/> */}
        <Productdetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
