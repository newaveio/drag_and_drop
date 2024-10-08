import './App.css'
import Navbar from "./components/perso/Navbar";
import YTWidget from './components/widgets/yt-widget';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";
import { useState } from "react";

interface Widget {
  id: number;
  content: JSX.Element | null;
}

function App() {

  return (
    <>
      <div className="mb-6">
        <Navbar></Navbar>
      </div>
      <div className="App">

      </div>
    </>
  );
}

export default App;