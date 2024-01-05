import { Container } from "./styles"

 
export function NewOrders({title, ...rest}) {
    return (
        <Container>
            <p className="poppins_100_medium" >{title}</p>
        </Container>    
    )
}