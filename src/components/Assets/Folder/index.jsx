import img from "../../../assets/folder.svg"

import { Container } from "./styles";

export function Folder() {
    return (
        <Container>
            <img src={img} alt="" />

            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
    
}