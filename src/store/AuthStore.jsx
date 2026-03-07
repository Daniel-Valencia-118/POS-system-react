import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";


// login con gogle autentificacion
export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        // iniciar sesion con google
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    },
    // cerrar sesion con google
    cerrarSesion: async () => {
        await supabase.auth.signOut();
    },
}));
