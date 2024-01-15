import { useEffect, useState } from "react";

import { Header } from "../../components/Header"
import { ButtonBack } from "../../components/Buttons/ButtonBack"
import { Input } from "../../components/Inputs/Input";
import { InputUpload } from "../../components/Inputs/InputUpload";
import { InputSelect } from "../../components/Inputs/InputSelect";

import { Container, Content, Form } from "./styles";
import { InputTagItem } from "../../components/InputTagItem";

export function New() {
    const [avatarFile, setAvatarFile] = useState(null)
    const [tags, setTags] = useState([])

    // useEffect(() => {
    //     console.log("avatar modificado")
    // }, [avatarFile])

    return(
        <Container>
            <Header admin />

            <Content>
                <ButtonBack />

                <h1 className="poppins_400_medium">Adicionar prato</h1>

                <Form>
                    <div className="first-row rows">
                        <InputUpload title="Imagem do prato" setFile={setAvatarFile} />
                        <Input title="Nome" placeholder="Ex.: Salada Ceasar" />
                        <InputSelect title="Categoria" />
                    </div>

                    <div className="mid-row rows">
                        <InputTagItem title="Ingredientes" setTags={setTags} tags={tags} />
                        <Input title="Price" placeholder="R$ 00,00" />
                    </div>

                    {/*
                    <div className="last-row rows">
                        <InputUpload title="Imagem do prato" setFile={setAvatarFile} />
                        <Input title="Nome" placeholder="Ex.: Salada Ceasar" />
                        <InputSelect title="Categoria" />
                    </div> 
                    */}
                </Form>
            </Content>
        </Container>    
    )
}