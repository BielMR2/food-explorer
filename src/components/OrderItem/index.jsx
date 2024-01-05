import { useEffect, useState } from "react";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { QuantityControl } from "../QuantityControl"
import { ButtonTomato100 } from "../Buttons/Button-tomato"

import { Container } from "./styles";



export function OrderItem({ order }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        order.count = count
    }, [count])


    return(
        <Container>
            <div className="heart" >{order.fav ? <FaHeart /> : <FaRegHeart />}</div>

            <img src={order.image} />

            <h1 className="poppins_300_bold" >{order.name}</h1>
            <p className="roboto_smaller_regular" >{order.description}</p>

            <h2 className="roboto_biggest_regular" >R$ {order.price}</h2>

            <div className="buttons" >
                <QuantityControl onDataChange={setCount} />
                <ButtonTomato100 className="poppins_100_medium" title="Incluir" />
            </div>
        </Container>
    )
}