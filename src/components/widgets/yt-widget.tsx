import React, { useState } from "react";
import expand_icon from "../../assets/maximize.svg";
import "./yt-widget.css";

const YTWidget: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    // const [showText, setShowText] = useState(false);


    // useEffect(() => {
    //     let textTimer: NodeJS.Timeout;
    //     if (isHovered) {
    //         setShowText(true);
    //         textTimer = setTimeout(() => {
    //             setShowText(false);
    //         }, 2000);
    //     } else {
    //         setShowText(false);
    //     }
    //     return () => {
    //         clearTimeout(textTimer);
    //     }
    // }, [isHovered]);

    return (
        <div
            className="widget-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="widget-header">
                <div className="flex-1">
                    <h2>Youtube</h2>
                </div>
                <div className="flex items-center">
                    {/* {showText && <span className="expand-text">Expand Widget</span>} */}
                    <img src={expand_icon} alt="expand-icon" className={isHovered ? "expand" : ""} />
                </div>
            </div>
            <div className="widget-body">
                <p>Widget Body</p>
            </div>
            <div className="widget-footer">
                <p>Widget Footer</p>
            </div>
        </div>
    )
}

export default YTWidget;