import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(1)

    function handleIncrement() {
        setCounter(state => state + 1);
    }

    function handleDecrement() {
        if (counter > 1) {
            setCounter(state => state - 1);
        }
    }

    return ( 
        <CounterContext.Provider value={{counter, handleIncrement, handleDecrement}}>
            {children}
        </CounterContext.Provider>)
}