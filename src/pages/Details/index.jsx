import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CounterProvider, CounterContext } from "../../context/CounterContext";

import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/Buttons/ButtonBack";
import { TagsIngredients } from "../../components/TagsIngredients"
import { QuantityControl } from "../../components/QuantityControl";
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"
import { Footer } from "../../components/Footer";

import { Container, Content, Main } from "./styles";



import image from "../../../tmpAssets/prato.png"
const user = {
    role: "admin"
}

export function Details() {
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
            ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
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

                    <div>
                        <h1 className="poppins_500_medium">{name}</h1>
                        <p className="poppins_300_regular">{description}</p>

                        <div className="tags">
                            {ingredients && ingredients.map((tag, index) => (
                                <TagsIngredients key={index} data={tag} />
                            ))}
                        </div>
                        

                        <div className="controlls">
                            <QuantityControl size="24px" order={order} />
                            <ButtonTomato100 title={`incluir ∙ R$ ${(price * counter).toFixed(2)}`} />
                        </div>

                    </div> 
                </Main>
            </Content>

            <Footer />
        </Container>    
    )
}