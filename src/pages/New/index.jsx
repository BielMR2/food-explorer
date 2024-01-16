import { useEffect, useState } from "react";

import { Header } from "../../components/Header"
import { ButtonBack } from "../../components/Buttons/ButtonBack"
import { Input } from "../../components/Inputs/Input";
import { InputUpload } from "../../components/Inputs/InputUpload";
import { InputSelect } from "../../components/Inputs/InputSelect";
import { ButtonTomato400 } from "../../components/Buttons/Button-tomato"
import { Footer } from "../../components/Footer"

import { Container, Content, Form } from "./styles";
import { InputTagItem } from "../../components/InputTagItem";
import { TextInput } from "../../components/Inputs/TextInput";
import { Section } from "../../components/Section";

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

                <h1 className="title-desktop poppins_400_medium">Adicionar prato</h1>
                <h1 className="title-mobile poppins_400_medium">Novo prato</h1>

                <Form>
                    <div className="first-row rows">
                        <Section maxcontent title="Imagem do prato">
                            <InputUpload setFile={setAvatarFile} />
                        </Section>
                        <Section title="Nome">
                            <Input placeholder="Ex.: Salada Ceasar" />
                        </Section>
                        <InputSelect title="Categoria" />
                    </div>

                    <div className="mid-row rows">
                        <Section title="Ingredientes">
                            <InputTagItem setTags={setTags} tags={tags} />
                        </Section>
                        <Section title="Preço">
                            <Input placeholder="R$ 00,00" />
                        </Section>
                    </div>

                    
                    <div className="last-row rows">
                        <Section title="Descrição">
                            <TextInput 
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            />
                        </Section>
                    </div> 

                    <ButtonTomato400 title="Salvar alterações" />
                   
                </Form>
            </Content>

            <Footer />
        </Container>    
    )
}