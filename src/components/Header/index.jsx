import { IoIosSearch } from "react-icons/io";
import { PiListBold } from "react-icons/pi";

import { Logo } from "../Logos/Logo"
import { LogoAdmin } from "../Logos/LogoAdmin";
import { Input } from "../Inputs/Input"
import { MyOrders } from "../MyOrders"
import { NewOrders } from "../NewOrders"
import { ButtonExit } from "../Buttons/ButtonExit"
import { MyOrdersIcon } from "../MyOrdersIcon";

import { Container, Menu, Functions, Menu2 } from "./styles"
 
export function Header({ data, admin }) {
    

    return (
        <Container>
            <Menu>
                <PiListBold />
            </Menu>

            {admin ? <LogoAdmin /> : <Logo />}

            {admin && <div className="space" />}

            <Functions>
                <Input 
                    icon={IoIosSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />

                {admin ? <NewOrders title="Novo prato" /> : <MyOrders orders={["pedido1", "pedido2", "pedido3"]}/>}

                <ButtonExit onClick={() => {console.log("111")}} />
            </Functions>
            
            {data && 
                <Menu2>
                    <MyOrdersIcon data={data.orders.length} />
                </Menu2>
            }
            
        </Container>    
    )
}