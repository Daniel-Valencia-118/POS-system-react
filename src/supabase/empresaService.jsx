// CRUD para EMPRESA

import Swal from "sweetalert2";
import { supabase } from "../index";

const tabla = "empresa";

export async function InsertarEmpresa(_empresa) {
    // almacenar la empresa y mostrar los datos y 'maybeSingle' para mostrar datos como objeto simple
    const { data, error } = await supabase.from(tabla).insert(_empresa).select().maybeSingle();
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            // footer: "<a href=\"#\">Why do I have this issuejj?</a>"
        });
        return;
    }
    return data;
}