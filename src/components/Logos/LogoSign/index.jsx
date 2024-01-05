import { Container } from "./styles"

import logosvg from "../../../assets/logo.svg"
 
export function LogoSign() {
    return (
        <Container>
            <img src={logosvg} />
            <p className="roboto_bigger_bold" >food explorer</p>
        </Container>    
    )
}