import React, { useState } from "react";
import "./DraggableGrid.css";

type Item = {
    id: number;
    className: string;
    position: { row: number; col: number };
};

const generateRandomPosition = (existingPositions: Set<string>): { row: number; col: number } => {
    let row, col, position;
    do {
        row = Math.floor(Math.random() * 4) + 1;
        col = Math.floor(Math.random() * 4) + 1;
        position = `${row}-${col}`;
    } while (existingPositions.has(position));
    existingPositions.add(position);
    return { row, col };
};

const DraggableGrid: React.FC = () => {
    const existingPositions = new Set<string>(["1-1", "1-2"]);
    const initialItems: Item[] = [
        { id: 1, className: "movable-item", position: { row: 1, col: 1 } },
        { id: 2, className: "movable-item", position: { row: 1, col: 2 } },
        ...Array.from({ length: 8 }).map((_, index) => ({
            id: index + 3,
            className: "movable-item",
            position: generateRandomPosition(existingPositions)
        }))
    ];

    const [items, setItems] = useState<Item[]>(initialItems);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData("text/plain", id.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, row: number, col: number) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const targetItem = items.find(item => item.position.row === row && item.position.col === col);

        let updatedItems = items.map(item =>
            item.id === id ? { ...item, position: { row, col } } : item
        );

        if (targetItem) {
            let newCol = targetItem.position.col + 1;
            let newRow = targetItem.position.row;
            if (newCol > 4) {
                newCol = 1;
                newRow += 1;
            }
            updatedItems = updatedItems.map(item =>
                item.id === targetItem.id ? { ...item, position: { row: newRow, col: newCol } } : item
            );
        }

        setItems(updatedItems);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="grid-container">
            <div className="grid">
                {Array.from({ length: 4 }).map((_, row) =>
                    Array.from({ length: 4 }).map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            className="grid-cell"
                            onDrop={(e) => handleDrop(e, row + 1, col + 1)}
                            onDragOver={handleDragOver}
                        >
                            {items.map(item =>
                                item.position.row === row + 1 && item.position.col === col + 1 ? (
                                    <div
                                        key={item.id}
                                        className={`grid-item ${item.className}`}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, item.id)}
                                    >
                                        <div className="grid-item-content">{item.id}</div>
                                    </div>
                                ) : null
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DraggableGrid;