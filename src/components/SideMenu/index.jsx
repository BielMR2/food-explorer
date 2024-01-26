import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/roles"

import { IoCloseOutline } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io";

import { Container, Header, Content } from "./styles"

import { Input } from "../Inputs/Input"
import { SlideMenuItem } from "../SlideMenuItem";
import { Footer } from "../Footer"

export function SideMenu({ menuIsOpen, onCloseMenu, onChange }) {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    function handleNewOrder() {
        navigate("/new")
    }

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return(
        <Container data-menu-is-open={menuIsOpen}>
            {menuIsOpen &&
            <>
            <Header onClick={onCloseMenu}>
                <IoCloseOutline size={30} />
                <h1 className="" >Menu</h1>
            </Header>

            <Content>
                <Input
                    icon={IoIosSearch}
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={onChange}
                />

                <div className="itens-button" >
                    {[USER_ROLE.CUSTOMER].includes(user.role) && <SlideMenuItem title="Meus favoritos" />}
                    {[USER_ROLE.ADMIN].includes(user.role) && <SlideMenuItem title="Novo prato" onClick={handleNewOrder} />}
                    <SlideMenuItem title="Sair" onClick={handleSignOut} />
                </div>
                
            </Content>
            

            <Footer />
            </>
            }
            
        </Container>    
    )
}