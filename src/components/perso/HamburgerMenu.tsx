// components/perso/HamburgerMenu.tsx
import React from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
    const menuItems: number[] = [17, 18, 19, 20];

    return (
        <div className="menu">
            <div className="hamburger-icon">
                <h1 className="text-4xl mb-6 border border-blue-200 rounded-lg p-2 shadow-inner-blue">All Widgets</h1>
            </div>
            <div className="menu-items">
                {menuItems.map((item: number) => (
                    <div key={item} className="menu-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HamburgerMenu;