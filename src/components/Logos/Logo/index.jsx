import { Container } from "./styles"

import logosvg from "../../../assets/logo.svg"
 
export function Logo() {
    return (
        <Container to="/">
            <img src={logosvg} />
            <p className="roboto_bigger_bold" >food explorer</p>
        </Container>    
    )
}