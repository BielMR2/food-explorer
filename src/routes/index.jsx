import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "../context/CounterContext";
import { useEffect } from "react";

import { api } from "../services/api"

import { USER_ROLE } from "../utils/roles"

import { useAuth } from "../hooks/auth"

import { AuthRoutes } from "./auth.routes"

import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"


export function Routes() {
    const { user, signOut } = useAuth()

    useEffect(() => {
        api
            .get("/users/validated")
            .catch(error => {
                if(error.response?.status === 401){
                    signOut()
                }
            })
    }, [])

    function AccessRoutes() {
        switch (user.role) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes />
                
            case USER_ROLE.CUSTOMER:
                return <CustomerRoutes />

            default:
                return <CustomerRoutes />;
        }
    }

    return(
        <BrowserRouter>
            <CounterProvider>
                { user ? <AccessRoutes /> : <AuthRoutes />}
            </CounterProvider>
        </BrowserRouter>
    )
}