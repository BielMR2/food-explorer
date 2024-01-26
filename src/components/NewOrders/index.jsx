import { Container } from "./styles"

 
export function NewOrders({icon: Icon, title, ...rest}) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={24} />}
            <p className="poppins_100_medium" >{title}</p>
        </Container>    
    )
}