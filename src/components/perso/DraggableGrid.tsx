import React, { useState } from "react";
import "./DraggableGrid.css";

type Item = {
    id: number;
    className: string;
    position: { row: number; col: number };
    size: { rows: number; cols: number };
};

const DraggableGrid: React.FC = () => {
    const initialItems: Item[] = [
        { id: 1, className: "grid-item", position: { row: 1, col: 1 }, size: { rows: 1, cols: 1 } },
        { id: 2, className: "grid-item large-item", position: { row: 2, col: 2 }, size: { rows: 2, cols: 2 } }
    ];

    const [items, setItems] = useState<Item[]>(initialItems);

    const maxCols = 4;
    const numRows = 4;

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData("text/plain", id.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, row: number, col: number) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const draggedItem = items.find(item => item.id === id);
        if (!draggedItem) return;

        // Check if the target cells are empty and have enough space
        const canPlace = checkIfCanPlace(row, col, draggedItem.size);
        if (!canPlace) return;

        const updatedItems = items.map(item =>
            item.id === id ? { ...item, position: { row, col } } : item
        );

        setItems(updatedItems);
    };

    const checkIfCanPlace = (row: number, col: number, size: { rows: number; cols: number }) => {
        for (let r = row; r < row + size.rows; r++) {
            for (let c = col; c < col + size.cols; c++) {
                if (r > numRows || c > maxCols || items.some(item => 
                    item.position.row <= r && r < item.position.row + item.size.rows &&
                    item.position.col <= c && c < item.position.col + item.size.cols
                )) {
                    return false;
                }
            }
        }
        return true;
    };

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
                {items.map(item => (
                    <div
                        key={item.id}
                        className={`grid-item ${item.className}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        style={{
                            gridRow: `${item.position.row} / span ${item.size.rows}`,
                            gridColumn: `${item.position.col} / span ${item.size.cols}`,
                        }}
                    >
                        <div className="grid-item-content">{item.id}</div>
                    </div>
                ))}
                {Array.from({ length: numRows }).map((_, row) =>
                    Array.from({ length: maxCols }).map((_, col) => (
                        <div
                            key={`${row}-${col}`}
                            className="grid-cell"
                            onDrop={(e) => handleDrop(e, row + 1, col + 1)}
                            onDragOver={handleDragOver}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default DraggableGrid;