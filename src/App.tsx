import './App.css'
import Home from "./components/perso/Home";
import About from "./components/perso/About";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <h1>
        Learning React: <span className="italic text-purple-500">[react-router-dom]</span>
      </h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;