import { useAuth } from "../../hooks/auth"
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { SideMenu } from "../../components/SideMenu"
import { Header } from "../../components/Header"
import { Folder } from "../../components/Assets/Folder"
import { SliderContentMobile } from "../../components/Sliders/SliderMobile";
import { SliderContentDesktop } from "../../components/Sliders/SliderDesktop";
import { Footer } from "../../components/Footer"

import { Container, SlidersMobile, SlidersDesktop } from "./styles";

    

export function Home() {
    const { user } = useAuth()

    const [search, setSearch] = useState('')
    const [allOrders, setallOrders] = useState([])
    const [ordersLoaded, setOrdersLoaded] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get(`/orders?title=${search}`)
            setallOrders(response.data)
            setOrdersLoaded(true)
        }

        fetchOrders()
    }, [search])

    useEffect(() => {
        setIsAdmin(user.role === "admin" ? true : false)
    })

    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                onChange={(e) => setSearch(e.target.value)}
            />


            { !menuIsOpen &&
            <>
            <Header
                onOpenMenu={() => setMenuIsOpen(true)} 
                onChange={(e) => setSearch(e.target.value)}
                data={{orders: [1, 2, 3, 4, 5]}}
                admin={isAdmin}
                noNeedSpace
            />

            <Folder />

            {ordersLoaded ?
            <>
                <SlidersMobile> 
                    {allOrders.map((orders, index) => (
                        <SliderContentMobile key={index} content={orders} />
                    ))}
                </SlidersMobile>
                
                <SlidersDesktop> 
                    {allOrders.map((orders, index) => (
                        <SliderContentDesktop key={index} content={orders} />
                    ))}
                </SlidersDesktop>
            </> 
            :
                <div className="NoOrders poppins_300_bold" >Nenhum pedido encontrado</div>
            }


            <Footer />
            </>
            }

            
        </Container>    
    )
}