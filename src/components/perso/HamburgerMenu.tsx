import React, { useState } from "react";
import { GridContextProvider, GridDropZone, GridItem, swap } from "react-grid-dnd";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
    const [menuItems, setMenuItems] = useState<number[]>([17, 18, 19, 20]);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onMenuChange = (_sourceId: string, sourceIndex: number, targetId: string, targetIndex: number) => {
        const nextState = swap(menuItems, sourceIndex, targetIndex);
        setMenuItems(nextState);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
    );
}

export default HamburgerMenu;