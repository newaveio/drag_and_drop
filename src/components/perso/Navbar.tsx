import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {

    const navLinkStyles = ({ isActive } : { isActive: boolean}) => {
        return isActive ? "text-blue-500 font-bold" : "text-white hover:text-gray-400";
    };

    const navigate = useNavigate();

    return (
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between">
                    <div 
                        className="text-white text-lg font-bold cursor-pointer"
                        onClick={() => navigate("/")}>
                            react-router-dom
                    </div>
                    <div className="space-x-4">
                        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                        <NavLink to="/about" className={navLinkStyles}>About</NavLink>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;