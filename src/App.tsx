import './App.css';
import Navbar from "./components/perso/Navbar";
import React, { useState } from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";

const App: React.FC = () => {
  const [items, setItems] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ]);

  const onChange = (sourceId: string, sourceIndex: number, targetIndex: number, targetId: string) => {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  };

  return (
    <>
      <div className="mb-6">
        <Navbar />
      </div>
      <div className="App">
        <GridContextProvider onChange={onChange as any}>
          <GridDropZone
            id="items"
            boxesPerRow={4}
            rowHeight={100}
            style={{ height: "400px" }}
          >
            {items.map((item) => (
              <GridItem key={item} className="griditemUI">
                <div
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                >
                  {item}
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </div>
    </>
  );
}

export default App;