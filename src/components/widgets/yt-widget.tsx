import React, { useEffect, useState } from "react";

const YTWidget: React.FC = () => {
    return (
        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-500 p-4">
                <h2 className="text-white text-lg font-semibold">Widget Header</h2>
            </div>
            <div className="p-4">
                <p className="text-gray-700">Widget Body</p>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-gray-500">Widget Footer</p>
            </div>
        </div>
    )
}

export default YTWidget;