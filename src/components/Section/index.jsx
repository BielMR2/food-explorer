import { Container } from "./styles";

export function Section({ title, children, onlyContent }) {
    return(
        <Container onlyContent={onlyContent}>
            <h1 className="roboto_small_regular" >{title}</h1>
            {children}
        </Container>    
    )
}