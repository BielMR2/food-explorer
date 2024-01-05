import { IoIosSearch } from "react-icons/io";
import { PiListBold } from "react-icons/pi";

import { LogoAdmin } from "../LogoAdmin"
import { Input } from "../Input"
import { NewOrders } from "../NewOrders"
import { ButtonExit } from "../Buttons/ButtonExit"


import { Container, Menu, Functions, StyledLogoAdmin } from "./styles"
 
export function HeaderAdmin() {
    return (
        <Container>
            <Menu>
                <PiListBold />
            </Menu>

            <StyledLogoAdmin>
                <LogoAdmin />
            </StyledLogoAdmin>

            <Functions>
                <Input
                    icon={IoIosSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />

                <NewOrders title="Novo prato" />

                <ButtonExit onClick={() => {console.log("111")}} />
            </Functions>
        </Container>    
    )
}