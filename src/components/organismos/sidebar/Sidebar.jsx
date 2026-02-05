import styled from "styled-components";
// Importa styled-components para crear componentes con estilos scoped
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../../index";
// Importa arrays con enlaces de navegación y componente para toggle de tema
import { v } from "../../../styles/variables";
// Importa objeto con variables de estilo (colores, iconos, espaciados)
import { NavLink } from "react-router-dom";
// Importa componente para navegación que detecta ruta activa automáticamente
import { Icon } from "@iconify/react";
// Importa componente para renderizar iconos vectoriales desde Iconify

// Componente Sidebar - Navegación principal colapsable/expandible
// Recibe props: state (booleano) para estado abierto/cerrado, setState (función) para cambiar estado
export function Sidebar({ state, setState }) {
  return (
    // Contenedor principal con prop $isopen para estilos condicionales
    <Main $isopen={state.toString()}>
      {/* Botón para expandir/colapsar el sidebar - Cambia estado onClick */}
      <span className="Sidebarbutton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />} {/* Icono que rota según estado */}
      </span>

      {/* Contenedor del sidebar con ancho variable según estado */}
      <Container $isopen={state.toString()} className={state ? "active" : ""}>
        {/* Sección del logo y título */}
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} />
            {/* Logo importado desde variables */}
          </div>
          <h2>POS Systema</h2> {/* Título visible solo cuando expandido */}
        </div>

        {/* Mapeo de enlaces principales definidos en LinksArray */}
        {LinksArray.map(({ icon, label, to }) => (
          <div
            // Clase condicional para animaciones de expansión
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label} // Key única para cada enlace
          >
            {/* NavLink aplica clase 'active' automáticamente cuando la ruta coincide */}
            <NavLink
              to={to} // Ruta destino
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <section className={state ? "content open" : "content"}>
                <Icon className="Linkicon" icon={icon} /> {/* Icono del enlace */}
                {/* Texto del enlace - visible/oculto según estado */}
                <span className={state ? "label_ver" : "label_oculto"}>
                  {label}
                </span>
              </section>
            </NavLink>
          </div>
        ))}

        {/* Línea divisoria entre secciones de enlaces */}
        <Divider />

        {/* Mapeo de enlaces secundarios con colores personalizados */}
        {SecondarylinksArray.map(({ icon, label, to, color }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <section className={state ? "content open" : "content"}>
                {/* Icono con color personalizado desde array */}
                <Icon color={color} className="Linkicon" icon={icon} />
                <span className={state ? "label_ver" : "label_oculto"}>
                  {label}
                </span>
              </section>
            </NavLink>
          </div>
        ))}

        {/* Enlace estático "MÁS" (sin funcionalidad de ruta definida) */}
        <div className={state ? "LinkContainer active" : "LinkContainer"}>
          <div className="Links">
            <section className={state ? "content open" : "content"}>
              <Icon
                color="#CE82FF" // Color fijo para este icono
                className="Linkicon"
                icon="heroicons:ellipsis-horizontal-circle-solid"
              />
              <span className={state ? "label_ver" : "label_oculto"}>MÁS</span>
            </section>
          </div>
        </div>

        {/* Componente para cambiar entre tema claro/oscuro */}
        <ToggleTema />
      </Container>
    </Main>
  );
}

// Estilos del contenedor principal del sidebar
const Container = styled.div`
  background: ${({ theme }) => theme.bgtotal}; /* Color de fondo del tema */
  color: ${(props) => props.theme.text}; /* Color de texto del tema */
  position: fixed; /* Fijo a la izquierda */
  padding-top: 20px;
  z-index: 2; /* Por encima del contenido principal */
  height: 100%;
  width: 88px; /* Ancho cuando está colapsado */
  transition: 0.1s ease-in-out; /* Transición suave para expansión */
  overflow-y: auto; /* Scroll vertical si contenido excede altura */
  overflow-x: hidden;
  border-right: 2px solid ${({ theme }) => theme.color2}; /* Borde derecho temático */

  /* Personalización del scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  /* Clase para estado expandido (añadida por className conditional) */
  &.active {
    width: 260px; /* Ancho cuando está expandido */
  }

  /* Estilos para la sección del logo */
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px; /* Espaciado inferior */
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      /* Transformaciones condicionales basadas en estado */
      transform: ${({ $isopen }) =>
        $isopen === "true" ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logorotate}); /* Rotación del tema */
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate; /* Animación del logo */
      }
    }
    h2 {
      color: #f88533; /* Color naranja fijo */
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)}; /* Visible solo expandido */
    }
  }

  /* Contenedor de cada enlace de navegación */
  .LinkContainer {
    margin: 9px 0;
    margin-right: 10px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* Estilos para los enlaces individuales */
  .Links {
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    color: ${(props) => props.theme.text};
    height: 60px;
    position: relative;
    .content {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      .Linkicon {
        display: flex;
        font-size: 33px; /* Tamaño de iconos */
        svg {
          font-size: 25px;
        }
      }

      /* Estados para texto del enlace */
      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
        display: initial; /* Texto visible */
      }
      .label_oculto {
        opacity: 0;
        display: none; /* Texto oculto */
      }

      /* Cuando sidebar está expandido */
      &.open {
        justify-content: start; /* Alineación a la izquierda */
        gap: 20px; /* Espacio entre icono y texto */
        padding: 20px;
      }
    }

    /* Efecto hover */
    &:hover {
      background: ${(props) => props.theme.bgAlpha}; /* Fondo semitransparente */
    }

    /* Estado activo (cuando la ruta coincide) */
    &.active {
      background: ${(props) => props.theme.bg6};
      border: 2px solid ${(props) => props.theme.bg5};
      color: ${(props) => props.theme.color1};
      font-weight: 600;
    }
  }
`;

/* Contenedor externo que maneja el botón de toggle */
const Main = styled.div`
  .Sidebarbutton {
    position: fixed; /* Botón flotante */
    top: 70px;
    left: 68px; /* Posición inicial junto al sidebar colapsado */
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg}; /* Efecto de profundidad */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 3; /* Por encima del sidebar */
    /* Transformación condicional: se desplaza y rota 180° cuando expandido */
    transform: ${({ $isopen }) =>
      $isopen === "true" ? `translateX(173px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

/* Componente para línea divisoria entre secciones de enlaces */
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4}; /* Color del tema */
  margin: ${() => v.lgSpacing} 0; /* Espaciado desde variables */
`;