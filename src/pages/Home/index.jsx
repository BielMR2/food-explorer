import { Header } from "../../components/Header"
import { Folder } from "../../components/Assets/Folder"
import { SliderMobile } from "../../components/Sliders/SliderMobile";
import { SliderDesktop } from "../../components/Sliders/SliderDesktop";
import { Footer } from "../../components/Footer"

import { Container, SlidersMobile, SlidersDesktop } from "./styles";

import image from "../../../tmpAssets/prato.png"

const orders=[
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },{
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },{
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: "true"
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