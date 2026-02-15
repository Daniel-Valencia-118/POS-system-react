import styled from "styled-components";
// Importa styled-components para crear componentes con estilos scoped
import { Icono } from "../../index";
// Importa componente Icono reutilizable (probablemente un wrapper para iconos)

// Componente Botón de guardar - Molécula reutilizable para acciones con icono y texto opcional
// Recibe múltiples props para personalizar apariencia y comportamiento:
// - funcion: función a ejecutar al hacer clic
// - titulo: texto del botón (si se provee, se muestra)
// - bgcolor: color de fondo del botón (se pasa como prop CSS)
// - icono: nombre/identificador del icono a mostrar
// - url: si se proporciona, el texto se envuelve en un enlace que abre en nueva pestaña
// - color: color del texto e icono (se pasa como prop CSS)
// - disabled: estado deshabilitado del botón
// - width: ancho personalizado del botón
export function Btnsave({
  funcion,
  titulo,
  bgcolor,
  icono,
  url,
  color,
  disabled,
  width
}) {
  return (
    // Contenedor principal (elemento button) con estilos condicionales
    <Container
      $width={width}                // Prop transitoria para styled-components (ancho)
      disabled={disabled}           // Atributo nativo de botón para deshabilitar
      $color={color}                // Prop transitoria para color de texto/icono
      type="submit"                 // Tipo submit para formularios
      $bgcolor={bgcolor}            // Prop transitoria para color de fondo
      onClick={funcion}             // Manejador de clic proporcionado por el padre
    >
      <section className="content">
        {/* Icono: se le pasa el color para que herede el color del texto */}
        <Icono $color={color}>{icono}</Icono>
        
        {/* Renderizado condicional del título solo si existe */}
        {titulo && (
          <span className="btn">
            {/* Enlace que abre en nueva pestaña si se proporciona url; 
                si no hay url, el enlace no funcionará (href undefined) */}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {titulo}
            </a>
          </span>
        )}
      </section>
    </Container>
  );
}

// Estilos del botón con styled-components
const Container = styled.button`
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  /* Color de fondo desde prop transitoria $bgcolor */
  background-color: ${(props) => props.$bgcolor};
  /* Borde con efecto 3D sutil */
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px); /* Posición inicial elevada */
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  /* Color de texto desde prop transitoria $color (espera valores RGB, ej: "255,255,255") */
  color: rgb(${(props) => props.$color});
  align-items: center;
  justify-content: center;
  /* Ancho personalizado opcional */
  width: ${(props) => props.$width};

  /* Contenedor interno para icono y texto */
  .content {
    display: flex;
    gap: 12px;
  }

  /* Efecto al presionar: simula hundimiento */
  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
  }

  /* Estilo para estado deshabilitado */
  &[disabled] {
    background-color: #646464; /* Gris fijo, anula bgcolor */
    cursor: no-drop;            /* Cursor no permitido */
    box-shadow: none;           /* Sin sombra */
    /* Nota: el color de texto probablemente se hereda de $color,
       pero podría no contrastar bien con fondo gris */
  }
`;

/* 
OBSERVACIONES ADICIONALES:
- El componente mezcla comportamiento de botón y enlace: el clic en el texto (si hay url) abre un enlace, 
  mientras que el clic en cualquier parte del botón ejecuta también la función `funcion`. 
  Esto puede causar doble acción o conflictos; normalmente un botón no debería contener un enlace.
- La prop `color` se usa en `rgb(${color})`, lo que implica que debe pasarse como string con valores 
  separados por coma (ej. "255,255,255"). Sería más robusto usar formato CSS estándar o pasar el color completo.
- El componente `Icono` probablemente espera un `$color` similar; se le pasa el mismo `color`.
*/