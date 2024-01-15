import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CounterProvider } from "../../context/CounterContext";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { QuantityControl } from "../QuantityControl"
import { ButtonTomato100 } from "../Buttons/Button-tomato"

import { Container } from "./styles";



export function OrderItem({ order }) {
    const { id, fav, image, name, description, price } = order

    const [favorite, setFavorite] = useState(fav)
    const navigate = useNavigate()

    function handleDetails(note_id) {
        navigate(`/details/${note_id}`)
    }

    function handlefav() {
        setFavorite(!favorite)
        fav = !fav
    }

    useEffect(() => {
        setFavorite(fav);
    }, []);

    return(
        <CounterProvider>
            <Container>
                <div className="heart" onClick={handlefav} >
                    {favorite ? <FaHeart /> : <FaRegHeart />}
                </div>

                <div className="openDetails" onClick={() => handleDetails(id)} >
                    <img src={image} />

                    <h1 className="poppins_300_bold" >{name}</h1>
                    <p className="roboto_smaller_regular" >{description}</p>

                    <h2 className="roboto_biggest_regular" >R$ {price}</h2>
                </div>
            

                <div className="buttons" >
                    <QuantityControl />
                    <ButtonTomato100 className="poppins_100_medium" title="Incluir" />
                </div>
            </Container>
        </CounterProvider>
    )
}