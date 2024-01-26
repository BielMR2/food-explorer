import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { LogoSign } from "../../components/Logos/LogoSign"
import { Input } from "../../components/Inputs/Input"
import { ButtonTomato100 } from "../../components/Buttons/Button-tomato"

import { Container, StyleLogoSign, Form, Mobile, Desktop } from "./styles"



export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name, !email, !password, !confirmPassword){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password, confirmPassword })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                console.log(error)
                alert(error.response.data.error.message)
            } else {
                alert("Não foi possivel cadastrar")
            }
        })    
    }


    return(
        <Container>
            <Mobile>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <Input 
                        title="Seu nome" 
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)} 
                    />
                    <Input 
                        title="Email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <Input
                        type="password" 
                        title="Senha" 
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}  
                    />
                    <Input
                        type="password" 
                        title="Confirmar senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setConfirmPassword(e.target.value)}  
                    />

                    <ButtonTomato100 title="Entrar" onClick={handleSignUp} />
                </Form>

                <a href="/">Já tenho uma conta</a>
            </Mobile>
            
            <Desktop>
                <StyleLogoSign>
                    <LogoSign />
                </StyleLogoSign>

                <Form>
                    <h1>Crie sua conta</h1>

                    <Input
                        title="Seu nome" 
                        placeholder="Exemplo: Maria da Silva" 
                        onChange={e => setName(e.target.value)}  
                    />
                    <Input 
                        title="email" 
                        placeholder="Exemplo: exemplo@exemplo.com.br" 
                        onChange={e => setEmail(e.target.value)}   
                        />
                    <Input
                        type="password" 
                        title="Senha" 
                        placeholder="No mínimo 6 caracteres" 
                        onChange={e => setPassword(e.target.value)}   
                        />
                    <Input
                        type="password" 
                        title="Confirmar senha" 
                        placeholder="No mínimo 6 caracteres" 
                        onChange={e => setConfirmPassword(e.target.value)} 
                        />

                    <ButtonTomato100 onClick={handleSignUp} title="Entrar" 
                    />
                    <a href="/">Já tenho uma conta</a>
                </Form>
            </Desktop>
        </Container>       
    )
}