import { Header } from "../../components/Header"
import { Folder } from "../../components/Assets/Folder"
import { SliderMobile } from "../../components/Sliders/SliderMobile";
import { SliderDesktop } from "../../components/Sliders/SliderDesktop";
import { Footer } from "../../components/Footer"
import { TagItem } from "../../components/TagItem"; 
import { InputTagItem } from "../../components/InputTagItem";

import { Container, SlidersMobile, SlidersDesktop } from "./styles";

import image from "../../../tmpAssets/prato.png"
import { OrderItem } from "../../components/OrderItem";
import { useState } from "react";

const orders=[
    {
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
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        count: 0
    },{
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },{
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },
    {
        image,
        name: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
        category: "Refeições",
        price: "49.97",
        ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
        fav: true,
        count: 0
    },


]

const order = {
    id: 1,
    image,
    name: "Salada Ravanello",
    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    category: "Refeições",
    price: "49.97",
    ingredients: ["alface", "cebola", "pão naan", "pepino", "rabanete", "romate"],
    fav: true,
};
    

export function Test() {
    const [tags, setTags] = useState([])

    return(
        <Container>
            <InputTagItem setTags={setTags} tags={tags} />
        </Container>    
    )
}