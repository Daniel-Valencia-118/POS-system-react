import { create } from "zustand";
import { InsertarEmpresa } from "../index";

export const useEmpresaStore = create((set) => ({
    insertarEmpresa: async (_empresa) => {
        const response = await InsertarEmpresa(_empresa);
        console.log("respuesta empresa", response);
        
    }
}));