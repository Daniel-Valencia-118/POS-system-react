import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../index"

// Rutas de sistema usando DOM y home desde index
export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
