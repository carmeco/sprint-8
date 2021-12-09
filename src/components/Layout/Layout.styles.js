import styled, { css } from "styled-components";

const container = css`
    max-width: 1400px;
    margin: 1rem 0.5rem;
    @media (min-width: 572px) {
        margin: auto;
    }
`;

export const Header = styled.header`
    ${container};
    display: grid;
    height: 170px;
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
    ${container};
`;
