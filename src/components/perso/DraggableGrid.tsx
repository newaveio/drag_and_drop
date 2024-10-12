import React, { useState } from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import "./DraggableGrid.css";

type Item = {
    id: number;
    width: number;
    height: number;
};

const DraggableGrid: React.FC = () => {
    const initialItems: Item[] = [
        { id: 1, width: 1, height: 1 },
        { id: 2, width: 1, height: 1 },
        { id: 3, width: 1, height: 1 },
        { id: 4, width: 2, height: 2 },
        { id: 5, width: 2, height: 2 }
    ];

    const [items, setItems] = useState<Item[]>(initialItems);

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
                    className="grid-drop-zone"
                >
                    {items.map((item) => (
                        <GridItem
                            key={item.id}
                            className={`grid-item ${item.id <= 3 ? 'small-item' : 'large-item'}`}
                        >
                            <div className="grid-item-content">
                                {item.id}
                            </div>
                        </GridItem>
                    ))}
                </GridDropZone>
            </GridContextProvider>
        </div>
    );
};

export default DraggableGrid;
