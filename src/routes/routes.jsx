import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index"

// Rutas de sistema usando DOM y home desde index
export function MyRoutes() {
    const { user } = UserAuth(); // el user de la Autentificacion
    return (
        <Routes>
            {/* Ruta que protege el Home (children) sin login */}
            <Route element = {<ProtectedRoute user = {user} redirecTo="/login"/>}>
                <Route path="/" element={<Home />} />
            </Route>
            {/* La ruta de login es accesible por todos */}
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
