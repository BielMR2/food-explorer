import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function MyOrdersIcon({data}) {
    return(
        <Container>
            <PiReceipt />

            <div>
                <p>{data === 0 || data === undefined ? "0" : data}</p>
            </div>
        </Container>    
    )
}