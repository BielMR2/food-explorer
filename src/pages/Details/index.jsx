import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"
import { CounterProvider, CounterContext } from "../../context/CounterContext";

import { PiReceipt } from "react-icons/pi";

import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/Buttons/ButtonBack";
import { TagsIngredients } from "../../components/TagsIngredients"
import { QuantityControl } from "../../components/QuantityControl";
import { NewOrders } from "../../components/NewOrders";
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"
import { Footer } from "../../components/Footer";

import { Container, Content, Main, Controlls } from "./styles";



import image from "../../../tmpAssets/prato.png"


export function Details() {
    const { user } = useAuth()
    const navigate = useNavigate()

    const { counter } = useContext(CounterContext)

    const [order, setOrder] = useState({})


    function handleBack() {
        navigate(-1)
    }
    

    useEffect(() => {
        setOrder({
            image,
            name: "Salada Ravanello",
            description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
            category: "Refeições",
            price: "49.97",
            ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"],
            fav: true,
        })
    }, [])



{/*   ADICIONAR O IMAGE AQUI, QUANDO FAZER A REQUISIÇÃO NO BACK-END   */}
    const { name, description, category, price, ingredients, fav } = order


    return (
        <Container>
            {(user.role === "admin") ? 
                <Header admin /> : <Header data={{orders: [1, 2, 3, 4, 5]}} />
            }
            
            <Content>
                <ButtonBack onClick={handleBack} />

                <Main>
                    <img src={image} alt="" />

                    <div className="details">
                        <h1 className="poppins_500_medium">{name}</h1>
                        <p className="poppins_300_regular">{description}</p>

                        <div className="tags">
                            {ingredients && ingredients.map((tag, index) => (
                                <TagsIngredients key={index} data={tag} />
                            ))}
                        </div>
                        

                        <Controlls>
                            <QuantityControl size="24px" order={order} />

                            {/*  Mobile / Desktop */}
                            <NewOrders className="button-mobile" icon={PiReceipt} title={`Pedir ∙ R$ ${(price * counter).toFixed(2)}`} />
                            <ButtonTomato100 className="button-desktop" title={`incluir ∙ R$ ${(price * counter).toFixed(2)}`} />
                        </Controlls>

                    </div> 
                </Main>
            </Content>

            <Footer />
        </Container>    
    )
}