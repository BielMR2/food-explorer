import { LogoSign } from "../../components/Logos/LogoSign"
import { Input } from "../../components/Input"
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"

import { Container, StyleLogoSign, Form, Mobile, Desktop } from "./styles"

export function SignIn() {


    return(
        <Container>
            <Mobile>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" placeholder="No mínimo 6 caracteres" />

                    <ButtonTomato100 title="Entrar" />
                </Form>

                <a href="/register">Criar uma conta</a>
            </Mobile>
            
            <Desktop>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <h1>Faça Login</h1>

                    <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" placeholder="No mínimo 6 caracteres" />

                    <ButtonTomato100 title="Entrar" />
                    <a href="/register">Criar uma conta</a>
                </Form>
            </Desktop>
        </Container>       
    )
}