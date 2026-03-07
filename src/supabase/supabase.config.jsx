import { createClient } from "@supabase/supabase-js";


// importar variables de entorno desde .env
export const supabase = createClient(
    import.meta.env.VITE_APP_SUPABASE_URL,
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);