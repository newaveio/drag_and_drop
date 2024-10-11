// components/perso/DraggableGrid.tsx
import React, { useState } from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import "./DraggableGrid.css";

const DraggableGrid: React.FC = () => {
    const initialItems:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    const totalCells: number = 16;

    const [items, setItems] = useState<number[]>(initialItems)

    const onChange = (_sourceId: string, sourceIndex: number, targetIndex: number, _targetId: string) => {
        const nextState = swap(items, sourceIndex, targetIndex);
        setItems(nextState);
    };

    return (
        <div className="grid-container">
            <GridContextProvider onChange={onChange as any}>
                <GridDropZone
                    id="items"
                    boxesPerRow={4}
                    rowHeight={100}
                    style={{ height: "400px" }}
                    className="gridDropZone"
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
    );
};

export default DraggableGrid;