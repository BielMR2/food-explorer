import { IoIosArrowBack } from "react-icons/io";

import { Container } from "./styles"

export function ButtonBack({ onClick }) {
    return (
        <Container onClick={onClick} >
            <IoIosArrowBack />
            <h1 className="poppins_300_bold" >Voltar</h1>
        </Container>    
    )
}