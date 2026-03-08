import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";

// FUNCION QUE PLANTILLA DE HOME
export function HomeTemplate() {
    // traemos la funcion 'cerrarSesion' desde useStore
    const { cerrarSesion } = useAuthStore();
    const { user } = UserAuth();

    return (
        <Container>
            <span> Home Template </span>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </Container>
    );
}

// Para traer datos de backend <span>{user.id}</span>

const Container = styled.div`
    height: 100vh
`