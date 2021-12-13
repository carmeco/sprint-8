import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    max-width: 650px;
    margin: auto;
    @media (min-width: 992px) {
        display: flex;
        max-width: none;
        margin: 2rem 1rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-bottom: 2px solid var(--yellow);
    object-fit: cover;
    @media (min-width: 992px) {
        width: 600px;
        border-bottom: none;
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
        padding: 0.5rem 0;

        p:first-child {
            text-transform: uppercase;
            font-weight: bold;
            padding-bottom: 0.3rem;
        }
    }
`;
