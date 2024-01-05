import { PiSignOut } from "react-icons/pi";

import { Container } from "./styles"

export function ButtonExit({ onClick }) {
    return (
        <Container onClick={onClick} >
            <PiSignOut />
        </Container>    
    )
}