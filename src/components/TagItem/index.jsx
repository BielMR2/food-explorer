import { FaPlus, FaMinus } from "react-icons/fa6";

import { Container } from "./styles";

export function TagItem({ isNew, value, onClick, ...rest }) {
    function handleButtonCLick() {
        onClick(value)
        console.log("cliquei em algo")
    }

    return (
        <Container $isNew={isNew}>
            <input
                className="roboto_small_regular" 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={handleButtonCLick}
                className={isNew ? "button-add" : "button-delete"}
            >
                { isNew ? <FaPlus/> : <FaMinus/> }
            </button>
        </Container>    
    )
}