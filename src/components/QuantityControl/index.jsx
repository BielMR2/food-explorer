import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext"

import { Container } from "./styles";

import { FaMinus, FaPlus } from "react-icons/fa6";



export function QuantityControl({ onClick, size }) {
    const { counter, handleIncrement, handleDecrement } = useContext(CounterContext)

    return (
        <Container onClick={onClick}>
            <FaMinus size={size} onClick={handleDecrement} />
            <div className="roboto_big_bold">
                {String(counter).padStart(2, '0')}
            </div>
            <FaPlus size={size} onClick={handleIncrement} />
        </Container>    
    );
}