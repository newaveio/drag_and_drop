import './App.css';
import Navbar from "./components/perso/Navbar";
import Menu from "./components/perso/HamburgerMenu";
import TheGrid from "./components/perso/DraggableGrid";

const App: React.FC = () => {

  return (
    <>
      <div className="mb-6">
        <Navbar />
      </div>
      <div className="App">
        <Menu />
        <TheGrid />
      </div>
    </>
  );
}

export default App;