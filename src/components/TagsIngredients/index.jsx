import { Container } from "./styles";

export function TagsIngredients({data}) {
    return (
        <Container>
            <div className="Poppins_100_medium">
                {data}
            </div>
        </Container>    
    )
}