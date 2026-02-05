import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* background-color: ${(props) => props.theme.bgtotal};       por propiedades */
        background-color: ${({theme}) => theme.bgtotal};        /* directamente a las propiedades */
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
    }
`