import { create } from "zustand";
import { Dark, Light} from "../styles/themes"


export const useThemeStore = create((set, get) => ({
    theme: "light",
    themeStyle: Light,

    // funcion para cambiar de tema de claro a oscuro
    setTheme: () => {
        const { theme } = get();
        set({ theme: theme === "light" ? "dark" : "light"});
        set({ themeStyle: theme === "light" ? Dark : Light});
    },
}));