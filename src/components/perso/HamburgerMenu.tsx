import React, { useState } from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import "./HamburgerMenu.css";
import menuIcon from "../../assets/menu.svg";

const HamburgerMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuItems: number[] = [17, 18, 19, 20];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={`menu ${menuOpen ? "open" : ""}`}>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu icon" />
                </div>
                <div className="menu-items">
                    {menuItems.map((item: number) => (
                        <div key={item} className="menu-item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
        </>
    );
}

export default HamburgerMenu;