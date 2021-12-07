import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&display=swap');
        
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
`;
