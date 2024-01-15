import { Container } from "./styles"
 
export function Input({ title, icon: Icon, type = "text", ...rest }) {
    return (
        <Container>
            {title && <p className="roboto_small_regular">{title}</p>}
            <div>
                {Icon && <Icon />}
                <input type={type} className="roboto_small_regular" {...rest} />
            </div>
        </Container>    
    )
}