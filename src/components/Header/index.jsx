import { IoIosSearch } from "react-icons/io";
import { PiListBold } from "react-icons/pi";

import { Logo } from "../Logos/Logo"
import { Input } from "../Input"
import { MyOrders } from "../MyOrders"
import { ButtonExit } from "../Buttons/ButtonExit"
import { MyOrdersIcon } from "../MyOrdersIcon";

import { Container, Menu, Functions, Menu2 } from "./styles"
 
export function Header({ data }) {
    return (
        <Container>
            <Menu>
                <PiListBold />
            </Menu>

            <Logo />

            <Functions>
                <Input 
                    icon={IoIosSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />

                <MyOrders orders={["pedido1", "pedido2", "pedido3"]}/>

                <ButtonExit onClick={() => {console.log("111")}} />
            </Functions>
            
            <Menu2>
                <MyOrdersIcon data={data.orders.length} />
            </Menu2>
            
        </Container>    
    )
}