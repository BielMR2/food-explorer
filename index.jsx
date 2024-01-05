import { Container } from "./src/components/Logo/styles"

import logo from "../../assets/logo.svg"
 
export function Logo() {
    return (
        <Container>
            <img src={logo}/>
            <h1 className="roboto_bigger_bold" >food exporer</h1>
        </Container>    
    )
}