import styled, { css } from "styled-components";
import image from "../../images/background.jpg";

const background = css`
    background-color: black;
    max-width: 1400px;
    margin: auto;
`;

export const Header = styled.header`
    ${background};
    background-image: url(${image});
    height: 140px;
    display: grid;
    grid-template-areas: ". starwars login";
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    img {
        grid-area: starwars;
        justify-self: center;
    }

    div {
        grid-area: login;
        justify-self: end;
    }
`;

export const Wrapper = styled.div`
    ${background};
`;
