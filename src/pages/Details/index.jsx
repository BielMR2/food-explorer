import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/Buttons/ButtonBack";

import { Container } from "./styles";

export function Details() {
    return (
        <Container>
            <Header data={{orders: [1, 2, 3, 4, 5]}} />

            <ButtonBack />
        </Container>    
    )
}