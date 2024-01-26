import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CounterProvider } from "../../context/CounterContext";

import { api } from "../../services/api"

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { QuantityControl } from "../QuantityControl"
import { ButtonTomato100 } from "../Buttons/Button-tomato"

import { Container } from "./styles";

import imagePlaceholder from "../../assets/imagePlaceholder.avif"


export function OrderItem({ order }) {
    const { id, image, title, description, price } = order
    const [favorite, setFavorite] = useState(true)
    const navigate = useNavigate()

    const imageURL = image ? `${api.defaults.baseURL}/files/${image}` : imagePlaceholder
    
    function handleDetails(note_id) {
        navigate(`/details/${note_id}`)
    }

    function handlefav() {
        setFavorite(!favorite)
    }

    useEffect(() => {
        setFavorite(false);
    }, []);

    return(
        <CounterProvider>
            <Container>
                <div className="heart" onClick={handlefav} >
                    {favorite ? <FaHeart /> : <FaRegHeart />}
                </div>

                <div className="openDetails" onClick={() => handleDetails(id)} >
                    { image ? <img src={imageURL} /> : <div className="imagePlaceholder" /> }
                    

                    <h1 className="poppins_300_bold" >{title}</h1>
                    <p className="roboto_smaller_regular" >{description}</p>

                </div>

                <h2 className="roboto_biggest_regular" >R$ {price}</h2>
            

                <div className="buttons" >
                    <QuantityControl />
                    <ButtonTomato100 className="poppins_100_medium" title="Incluir" />
                </div>
            </Container>
        </CounterProvider>
    )
}