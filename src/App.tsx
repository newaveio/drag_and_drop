import './App.css'
import Navbar from "./components/perso/Navbar";
// import YTWidget from './components/widgets/yt-widget';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import React, { useState } from "react";

interface Square {
  id: string;
  content: string;
}

const initialSquares: Square[] = Array.from({ length: 9}, (_, index) => ({
  id: `square-${index}`,
  content: `Square ${index + 1}`,
}));

function App() {
  const [squares, setSquares] = useState<Square[]>(initialSquares);

  const onDragEnd = (result: DropResult) => {
    if(!result.destination) {
      return ;
    }

    const reorderedSquares = Array.from(squares);
    const [removed] = reorderedSquares.splice(result.source.index, 1);
    reorderedSquares.splice(result.destination.index, 0, removed);

    setSquares(reorderedSquares);
  }

  return (

    <>
      <div className="mb-6">
        <Navbar></Navbar>
      </div>
      {/* <div className="App">

      </div> */}
      <div className="layout__wrapper">
        <div className="header">
          <h1>Drag and Drop</h1>
        </div>
        <div className="card">
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="grid" direction="horizontal">
              {(provided) => (
                <div className="grid-container" ref={provided.innerRef} {...provided.droppableProps}>
                  {squares.map((square, index) => (
                    <Draggable key={square.id} draggableId={square.id} index={index}>
                      {(provided) => (
                        <div
                          className="grid-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {square.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </>
  );
}

export default App;
