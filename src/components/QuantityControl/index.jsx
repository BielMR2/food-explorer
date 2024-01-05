import { useState, useEffect } from "react";
import { Container } from "./styles";

import { FaMinus, FaPlus } from "react-icons/fa6";


export function QuantityControl({ onClick, onDataChange }) {
    const [count, setCount] = useState(0)


    function handleIncrement() {
        setCount(prevCount => prevCount + 1)
    }

    function handleDecrement() {
        if(count > 0){
            setCount(prevCount => prevCount - 1)
        }
    }

    useEffect(() => {
        onDataChange(count)
    }, [count])


    return (
        <Container onClick={onClick}>
            <FaMinus onClick={handleDecrement} />
            {count}
            <FaPlus onClick={handleIncrement} />
        </Container> 
    )
}