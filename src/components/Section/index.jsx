import { Container } from "./styles";

export function Section({ title, children, maxcontent }) {
    return(
        <Container $maxcontent={maxcontent}>
            <h1 className="roboto_small_regular" >{title}</h1>
            {children}
        </Container>    
    )
}