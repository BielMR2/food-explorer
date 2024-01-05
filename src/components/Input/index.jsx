import { Container } from "./styles"
 
export function Input({ title, icon: Icon, teste, ...rest }) {
    return (
        <Container>
            {title && <p className="roboto_small_regular">{title}</p>}
            <div>
                {Icon && <Icon />}
                <input className="roboto_small_regular" {...rest} />
            </div>
        </Container>    
    )
}