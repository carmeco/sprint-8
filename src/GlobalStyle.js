import { createGlobalStyle } from "styled-components";
import image from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    :root {        
        //theme colors
        --lightGrey: #999999;
        --midGrey: #343434;
        --darkGrey: #151515;
        --yellow: #ffe919;
    }

    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: black;
        background-image: url(${image});
        color: var(--lightGrey);
        font-family: 'Barlow', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--lightGrey);
        &:hover {
            color: white;
        }
    }

    button {
    border: none;
    border-radius: 5px;
    background-color: var(--yellow);
    opacity: 0.5;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}
`;
