import './App.css'
import Navbar from "./components/perso/Navbar";
// import YTWidget from './components/widgets/yt-widget';
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import React, { useState } from "react";

// interface Widget {
//   id: number;
//   content: JSX.Element | null;
// }

interface Item {
  id: string;
  name: string;
}

interface Store {
  id: string;
  name: string;
  items: Item[];
  tint: number;
}

const DATA: Store[] = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Walmart",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Designing Data Intensive Applications",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
    ],
    tint: 3,
  },
];

function App() {
  const [stores, setStores] = useState<Store[]>(DATA);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return ;
    }

    const reorderedStores = Array.from(stores);
    const [removed] = reorderedStores.splice(result.source.index, 1);
    reorderedStores.splice(result.destination.index, 0, removed);

    setStores(reorderedStores);
  };

  return (

    <>
      <div className="mb-6">
        <Navbar></Navbar>
      </div>
      {/* <div className="App">

      </div> */}
      <div className="layout__wrapper">
        <div className="card">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="header">
              <h1>Drag and Drop</h1>
            </div>
            <Droppable droppableId="ROOT" type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {stores.map((store, index) => (
                    <Draggable draggableId={store.id} key={store.id} index={index} >
                      {(provided) => (
                        <div
                          className="store-container"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <h3>{store.name}</h3>
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
