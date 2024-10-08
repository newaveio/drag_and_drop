import React from "react";
import { useNavigate } from "react-router-dom";
import { Button  }from "../ui/button";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="text-3xl font-bold italic text-blue-500">
                Home Page
            </div>
            <Button onClick={() => navigate("order-summary")}>Place Order</Button>
        </>
    );
};

export default Home;