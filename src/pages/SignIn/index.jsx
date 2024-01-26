import { useState } from 'react';

import { useAuth } from "../../hooks/auth"

import { LogoSign } from "../../components/Logos/LogoSign"
import { Input } from "../../components/Inputs/Input"
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"

import { Container, StyleLogoSign, Form, Mobile, Desktop } from "./styles"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        if(!email, !password){
            return alert("Preencha todos os campos!")
        }

        signIn({ email, password })
    }


    return(
        <Container>
            <Mobile>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <Input 
                        title="Email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}   
                    />
                    <Input
                        type='password' 
                        title="Senha" 
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}    
                    />

                    <ButtonTomato100 onClick={handleSignIn} title="Entrar" />
                </Form>

                <a href="/register">Criar uma conta</a>
            </Mobile>
            
            <Desktop>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <h1>Faça Login</h1>

                    <Input
                        title="Email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br" 
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <Input
                        type='password'  
                        title="Senha" 
                        placeholder="No mínimo 6 caracteres" 
                        onChange={e => setPassword(e.target.value)}   
                    />

                    <ButtonTomato100 onClick={handleSignIn} title="Entrar" />
                    <a href="/register">Criar uma conta</a>
                </Form>
            </Desktop>
        </Container>       
    )
}