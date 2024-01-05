import { Container } from "./styles"

import logosvg from "../../../assets/logofooter.svg"
 
export function LogoFooter() {
    return (
        <Container>
            <img src={logosvg} />
            <p className="roboto_bigger_bold" >food explorer</p>
        </Container>    
    )
}