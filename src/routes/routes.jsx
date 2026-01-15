import { Routes, Route, BrowserRouter, Router} from "react-router-dom";
import {Home} from "../index"

// Rutas de sistema usando DOM y home desde index
export function MyRoutes () {
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
</Routes>    
</BrowserRouter>
}
