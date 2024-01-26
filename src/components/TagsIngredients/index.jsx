import { Container } from "./styles";

export function TagsIngredients({data}) {
    return (
        <Container>
            <p className="Poppins_100_medium">
                {data}
            </p>
        </Container>    
    )
}