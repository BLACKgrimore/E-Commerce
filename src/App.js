import logo from './logo.svg';
import './App.css';
import Navbar from "./customer/componenets/navigation/navigation.jsx"
import Home from "./customer/pages/homepage/homepage.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
