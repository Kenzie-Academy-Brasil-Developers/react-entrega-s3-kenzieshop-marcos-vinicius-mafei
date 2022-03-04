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