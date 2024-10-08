import './App.css'
import Home from "./components/perso/Home";
import About from "./components/perso/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/perso/Navbar";
import OrderSummary from './components/perso/OrderSummary';
import YTWidget from './components/widgets/yt-widget';

function App() {

  return (
    <>
      <div className="Navbar">
        <Navbar></Navbar>
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="order-summary" element={<OrderSummary/>}></Route>
        </Routes>
      </div>
        <YTWidget/>
    </>
  );
}

export default App;