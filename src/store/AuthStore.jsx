import { create } from "zustand";
import { MostrarCategoria, MostrarUsuarios, supabase } from "../index";


// login con gogle autentificacion
export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        // iniciar sesion con google
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        console.log("data user", data);
        
        // if (data) {
        //     await MostrarUsuarios({id_auth:data} )
        // }
    },

    // cerrar sesion con google
    cerrarSesion: async () => {
        await supabase.auth.signOut();
    },
}));
