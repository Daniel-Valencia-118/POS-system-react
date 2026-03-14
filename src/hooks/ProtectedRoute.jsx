import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ user, redirecTo, children }) => {
    if (user == null) return <Navigate replace to = {redirecTo} /> // replace reemplaza toda ruta con el 'redirecTo'

    return children?children: <Outlet/>; // '?' si no hay children entonces Outlet espera a que la pagina cargue
}