import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 650px;
    margin: auto;
    @media (min-width: 992px) {
        max-width: none;
        margin: 2rem 1rem;
    }
    h3 {
        text-transform: uppercase;
        padding-bottom: 1rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;
