import { Container } from "./styles"

import theme from "../../../styles/theme"

 
export function ButtonTomato100({title, ...rest}) {
    return (
        <Container style={{ backgroundColor: `${theme.COLORS.TOMATO_100}`}}>
            <p className="poppins_100_medium" >{title}</p>
        </Container>    
    )
}

export function ButtonTomato200({title, ...rest}) {
    return (
        <Container style={{ backgroundColor: `${theme.COLORS.TOMATO_200}`}}>
            <p className="poppins_100_medium" >{title}</p>
        </Container>    
    )
}

export function ButtonTomato400({title, ...rest}) {
    return (
        <Container style={{ backgroundColor: `${theme.COLORS.TOMATO_400}`}}>
            <p className="poppins_100_medium" >{title}</p>
        </Container>    
    )
}