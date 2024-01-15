import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

import { CounterProvider } from "../context/CounterContext";


export function Routes() {
    //    const { user } = useAuth()

    return(
        <BrowserRouter>
            {/* user ? <AppRoutes /> : <AuthRoutes /> */}
            <CounterProvider>
                <AppRoutes />
            </CounterProvider>
        </BrowserRouter>
    )
}