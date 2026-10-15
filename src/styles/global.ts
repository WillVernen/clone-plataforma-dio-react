import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
        box-sizing: border-box;
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
        font-family: 'Open Sans';
        min-width: 320px;
        min-height: 100vh;
    }

    button,
    input {
        font: inherit;
    }
`;