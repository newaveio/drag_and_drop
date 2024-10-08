import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const OrderSummary: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                Order Confirmed!
            </div>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
        </>
    )
}

export default OrderSummary;