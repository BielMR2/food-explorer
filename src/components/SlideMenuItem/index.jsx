import { Container } from "./styles";

export function SlideMenuItem({ title, onClick }) {
    return(
        <Container onClick={onClick}>
            <h1>{title}</h1>
        </Container>    
    )
}