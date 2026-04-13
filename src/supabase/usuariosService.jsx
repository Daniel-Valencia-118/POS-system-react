// CRUD PARA LOS USUARIOS
import { supabase } from "./supabase.config";

const tabla = "usuario";

export async function MostrarUsuarios(_usuario) {
    // mostrar datos de usuario en formato single
    const {data} = await supabase.from(tabla).select().eq("id_auth", _usuario.id_auth).maybeSingle();
    return data;
}