import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    border-radius: 2rem;
    display: grid;
    margin: 2rem auto;
    max-width: 600px;
    @media (min-width: 1200px) {
        grid-template-columns: 3fr 2fr;
        max-width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom: 2px solid var(--yellow);
    @media (min-width: 1200px) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom: none;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-right: 2px solid var(--yellow);
    }
`;

export const Details = styled.div`
    padding: 1.5rem 2rem;

    h2 {
        text-transform: uppercase;
        padding-bottom: 0.5rem;
    }

    li {
        padding: 0.7rem 0;

        p:first-child {
            text-transform: uppercase;
            font-weight: bold;
            padding-bottom: 0.5rem;
        }
    }
`;
