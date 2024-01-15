import { Header } from "../../components/Header"
import { Folder } from "../../components/Assets/Folder"
import { SliderMobile } from "../../components/Sliders/SliderMobile";
import { SliderDesktop } from "../../components/Sliders/SliderDesktop";
import { Footer } from "../../components/Footer"

import { Container, SlidersMobile, SlidersDesktop } from "./styles";

import image from "../../../tmpAssets/prato.png"

const orders=[
    {
        id: "1",
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 1
    },
    {
        id: "2",
        image,
        name: "Outro Prato",
        description: "Descrição do outro prato.",
        category: "Outra Categoria",
        price: "29.99",
        ingredients: ["ingrediente1", "ingrediente2", "ingrediente3"],
        fav: false,
        count: 1
    },
    {
        id: "3",
        image,
        name: "Mais um Prato",
        description: "Descrição do mais um prato.",
        category: "Mais uma Categoria",
        price: "39.95",
        ingredients: ["ingredienteA", "ingredienteB", "ingredienteC"],
        fav: true,
        count: 1
    },
]
    

export function Home() {
    return(
        <Container>
            <Header data={{orders: [1, 2, 3, 4, 5]}} />

            <Folder />

            <SlidersMobile>
                <SliderMobile title="Refeições" orders={orders} />
                <SliderMobile title="Pratos Principais" orders={orders} />
                <SliderMobile title="Bebidas" orders={orders} />
            </SlidersMobile>
            
            <SlidersDesktop>
                <SliderDesktop title="Refeições" orders={orders} />
                <SliderDesktop title="Pratos Principais" orders={orders} />
                <SliderDesktop title="Bebidas" orders={orders} />
            </SlidersDesktop>

            <Footer />

        </Container>    
    )
}