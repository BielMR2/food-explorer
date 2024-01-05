import { Container } from "./styles"

import { PiReceipt } from "react-icons/pi";
 
export function MyOrders({ orders }) {
    return (
        <Container>
            <PiReceipt />
            <p className="poppins_100_medium" >Meu pedido</p>
            ( {orders.length} )
        </Container>    
    )
}