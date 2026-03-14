import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider, GlobalStyles, Login, MyRoutes, Sidebar, useThemeStore } from "./index";
import { Device } from "./styles/breakpoints"
import { useState } from "react";
import { useLocation } from "react-router-dom"; // Para saber donde nos encontramos

function App() {
  const [siderbarOpen, setSidebarOpen] = useState(false); // estado para el sidebar
  const { themeStyle } = useThemeStore();
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={themeStyle} >   {/* theme es un atributo de themeProvider y este comparte los objetos de ThemeStore */}
      <AuthContextProvider> {/* El contexto estará escuchando siempre lo que pase dentro, aquí 'container' */} 
        <GlobalStyles /> {/* estilos globales */}
        { // Si la ruta es 'login' entonces cargar Login si no mostrar sidebar
          pathname != "/login" ? (
            <Container className={siderbarOpen ? "active" : ""}> {/* Contenedor interactua con siderbar,cuando es true esta activo */}
              {/* seccion 1 */}
              <section className="contentSidebar">
                <Sidebar state={siderbarOpen} setState={() => setSidebarOpen(!siderbarOpen)} />
              </section>

              {/* seccion 2 */}
              <section className="contentMenuhambur">menu ambur</section>
              <section className="contentRouters"> <MyRoutes /> </section>
            </Container>
          ) : (<Login/>)
        }
      </AuthContextProvider>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out; /* Transición suave para coincidir con la del sidebar */
  color: ${({ theme }) => theme.text};

  
  .contentSidebar {
    display: none;
    /* background-color: rgba(78, 45, 78, 0.5); */
  }
  .contentMenuhambur {
    position: absolute;
    /* background-color: rgba(53, 219, 11, 0.5); */
  }
  .contentRouters {
    /* display: flex; */
    /* background-color: rgba(231, 13, 136, 0.5); */
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;   /* mismo al definido en siderbar.jsx cuando se expande */
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`
export default App
