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

const findNextPosition = (row: number, col: number, maxCols: number) => {
    let newCol = col + 1;
    let newRow = row;
    if (newCol > maxCols) {
        newCol = 1;
        newRow += 1;
    }
    return { row: newRow, col: newCol };
};

const DraggableGrid: React.FC = () => {
    // const existingPositions = new Set<string>(["1-1", "1-2"]);
    const initialItems: Item[] = [
        { id: 1, className: "movable-item", position: { row: 1, col: 1 } },
        { id: 2, className: "movable-item", position: { row: 1, col: 2 } },
        // ...Array.from({ length: 4 }).map((_, index) => ({
        //     id: index + 3,
        //     className: "movable-item",
        //     position: generateRandomPosition(existingPositions)
        // }))
    ];

    const [items, setItems] = useState<Item[]>(initialItems);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData("text/plain", id.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, row: number, col: number, maxCols: number) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const targetItem = items.find(item => item.position.row === row && item.position.col === col);

        let updatedItems = items.map(item => 
            item.id === id ? { ...item, position: { row, col } } : item
        );
        
        if (targetItem) {
            // Move the target item and any items in the way
            let currentItem: Item | undefined = targetItem;
            let nextPosition = findNextPosition(currentItem.position.row, currentItem.position.col, maxCols);
            while (currentItem) {
                updatedItems = updatedItems.map(item =>
                    item.id === currentItem!.id ? { ...item, position: nextPosition } : item
                );
                currentItem = updatedItems.find(item => item.position.row === nextPosition.row && item.position.col === nextPosition.col && item.id !== currentItem!.id);
                if (currentItem) {
                    nextPosition = findNextPosition(currentItem.position.row, currentItem.position.col, maxCols);
                }
            }
        }

        // Check if the item is moved to the last column of the last row and if the position is already occupied
        const maxRow = Math.max(...updatedItems.map(item => item.position.row));
        const isLastCellEmpty = !items.some(item => item.position.row === maxRow && item.position.col === maxCols);
        if (!(row === maxRow && col === maxCols && isLastCellEmpty)) {
            updatedItems = updatedItems.map(item =>
                item.id === id ? { ...item, position: { row, col } } : item
            );
        }
        
        setItems(updatedItems);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const maxCols = 4;
    const numRows = Math.max(4, ...items.map(item => item.position.row));
    
    return (
        <div className="grid-container">
            <div 
                className="grid" 
                style={{ 
                    gridTemplateColumns: `repeat(${maxCols}, 1fr)`, 
                    gridTemplateRows: `repeat(${numRows}, 1fr)`,
                    height: `${numRows * 100}px` // Adjust height dynamically
                }}
            >
                {Array.from({ length: numRows }).map((_, row) =>
                    Array.from({ length: maxCols }).map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            className="grid-cell"
                            onDrop={(e) => handleDrop(e, row + 1, col + 1, maxCols)}
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