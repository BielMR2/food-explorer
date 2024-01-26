import { Container } from "./styles"

import logosvg from "../../../assets/logo.svg"
 
export function LogoAdmin() {
    return (
        <Container to="/">
            <img src={logosvg} />

            <div>
                <h1 className="roboto_bigger_bold" >food explorer</h1>
                <p className="roboto_smallest_regular" >admin</p>
            </div>
        </Container>    
    )
}