import { LogoSign } from "../../components/Logos/LogoSign"
import { Input } from "../../components/Inputs/Input"
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"

import { Container, StyleLogoSign, Form, Mobile, Desktop } from "./styles"

export function SignUp() {


    return(
        <Container>
            <Mobile>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <Input title="Seu nome" placeholder="Exemplo: Maria da Silva" />
                    <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" placeholder="No mínimo 6 caracteres" />
                    <Input title="Confirmar senha" />

                    <ButtonTomato100 title="Entrar" />
                </Form>

                <a href="/">Já tenho uma conta</a>
            </Mobile>
            
            <Desktop>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <h1>Crie sua conta</h1>

                    <Input title="Seu nome" placeholder="Exemplo: Maria da Silva" />
                    <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" placeholder="No mínimo 6 caracteres" />
                    <Input title="Confirmar senha" />

                    <ButtonTomato100 title="Entrar" />
                    <a href="/">Já tenho uma conta</a>
                </Form>
            </Desktop>
        </Container>       
    )
}