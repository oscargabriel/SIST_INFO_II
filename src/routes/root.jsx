import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Compras from "../pages/Compras"
import Roles from "../pages/Roles"

 const router = createBrowserRouter([
    { path: '/login', element: <div>Login</div>, },
    { path: '/register', element: <div>register</div>,},
    { path: '/',
        element: <Layout />,
        children : [
            { path: '/compras', element: <Compras/>, },
            { path: '/ventas', element: <div>ventas</div>, },
            { path: '/clientes', element: <div>clientes</div>, },
            { path: '/productos', element: <div>productos</div>, },
            { path: '/proveedores', element: <div>proveedores</div>, },
            { path: '/empleados', element: <div>empleados</div>, },
            { path: '/roles', element: <Roles />, },
      
        ]
    }
])

export default router