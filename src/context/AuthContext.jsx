import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();    // hook de React

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);   // uso de useState
    // useEffect se ejecuta apenas se carga el aplicativo.
    useEffect(() => {
        // event = sign in/out, session = null o informacion 
        const {data} = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user == null) {
                setUser(null);
            } else {
                setUser(session.user);
                console.log("session", session);
            }
            // verificar el evento y la sesion actual
            // console.log("event", event);
            // console.log("session", session);
        });
        return () => {
            // subscription significa que siempre se escuchará el backend para saber todo lo que ocurre
            data.subscription;
        }
    }, []); // sin ",[]" ocurria un bucle.
    
    return (
        // compartimos en Provider, se comparte el user del userEffect y se comparte a los hijos
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
        // En este caso el 'children' seria el contenedor de app, el cual esta envuelto
    );
};
// Para consumir user se exporta userAuth
export const UserAuth = () => {
    return useContext(AuthContext);
};