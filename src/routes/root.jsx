import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Compras from "../pages/Compras"

 const router = createBrowserRouter([
    { path: '/login', element: <div>Login</div>, },
    { path: '/register', element: <div>register</div>,},
    { path: '/',
        element: <Layout />,
        children : [
            { path: '/compras', element: <Compras/>, },
            { path: '/ventas', element: <div>ventas</div>, },
            
        ]
    }
])

export default router