// CRUD para CATEGORIAS

import Swal from "sweetalert2";
import { supabase } from "./supabase.config";

export async function InsertarCategorias(p, file) {
    const {error, data} = await supabase.rpc("insertarCategorias", p)
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            // footer: "<a href=\"#\">Why do I have this issuejj?</a>"
        });
        return;
    }

    const img = file.size;
    if (img != undefined) {
        const nuevo_id = data;          // id de nueva categoria insertada
        const urlImagen = await subirImagen(nuevo_id, file);        // subir su imagen de la categoria
        const pIconoEditar = {
            icono: urlImagen.publicUrl,
            id: nuevo_id
        }
        await EditarIconoCategoria(pIconoEditar);       // editar su icono
    }
}

async function subirImagen(idcategoria, file) {         // id de la categoria objetivo
    const ruta = "categorias/" + idcategoria;
    const { data, error } = await supabase.storage
    .from('imagenes')                                   // bucket principal
    .upload(ruta, file, {         // ruta y archivo
        cacheControl: '0',  // El número de segundos que el recurso permanece en caché en el navegado
        upsert: true        // Cuando upsert se establece en verdadero, el archivo se sobrescribe si existe.
    });
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            // footer: "<a href=\"#\">Why do I have this issuejj?</a>"
        });
        return;
        // retornamos si hay error
    } 
    // verificar si  hay datos retornados en 'data'
    if (data) {
        const {data:urlimagen} = await supabase.storage
        .from('imagenes')
        .getPublicUrl(ruta);       // obtener URL de la imagen

        return urlimagen;
    }
}

async function EditarIconoCategoria(parameter) {
    const {error} = await supabase.from("categoria").update(parameter).eq("id", parameter.id);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            // footer: "<a href=\"#\">Why do I have this issuejj?</a>"
        });
        return;
    }
}

export async function MostrarCategoria(parameter) {
    const {data} = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa", parameter.id_empresa)
    .order("id", {ascending: false});
    
    return data;
}