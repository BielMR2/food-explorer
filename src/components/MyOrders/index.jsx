import { Container } from "./styles"

import { PiReceipt } from "react-icons/pi";
 
export function MyOrders({ orders }) {
    return (
        <Container>
            <PiReceipt />
            <p className="poppins_100_medium" >Pedidos</p>
            <div className="poppins_100_medium">
                ( {orders.length} )
            </div>
            
        </Container>    
    )
}