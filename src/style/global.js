import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --main: #222222;
        --darkOrange: #A34201;
        --strongYellow: #FFAF00;
        --brown: #973700;
        --midBrown:#7A271C;
        --lightOrange:#E67A1B;
        --cleanBlack:#121214;
        --toastify-color-success: #E67A1B;
        --toastify-color-dark: #222;
        --toastify-toast-min-height: 70px;
        --toastify-text-color-dark: #E67A1B;
        --toastify-font-family: 'Inter', sans-serif;
        ::-webkit-scrollbar {
        width: 12px;
        }
        ::-webkit-scrollbar-track {
        background: var(--cleanBlack); 
        }
        ::-webkit-scrollbar-thumb {
        background: var(--lightOrange); 
        }
        ::-webkit-scrollbar-thumb:hover {
        background: var(--brown); 
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: var(--main);
        font-size: 12px;
    }
    figcaption {
        display: none;
    }
`