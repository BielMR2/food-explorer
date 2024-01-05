import { Container } from "./styles";

import { LogoFooter } from "../Logos/LogoFooter"


export function Footer() {
    return (
        <Container>
            <LogoFooter />

            <p className="roboto_smaller_regular" >© 2023 - Todos os direitos reservados.</p>
        </Container>            
    )
}