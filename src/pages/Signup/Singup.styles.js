import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 3rem;
    max-width: 1000px;
    margin: 2rem auto;
    img {
        width: 100%;
        padding: 2rem 2rem 0 2rem;
    }
`;

export const Panel = styled.div`
    background-color: var(--darkGrey);
    padding: 2rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    a {
        color: var(--yellow);
        text-decoration: underline;
        opacity: 0.6;
        &:hover {
            opacity: 1;
        }
    }

    ul {
        display: grid;
        row-gap: 1rem;
        column-gap: 2.5rem;
        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    input {
        margin-top: 0.2rem;
    }

    button {
        margin-top: 0.2rem;
        padding: 0.4rem 0.8rem;
    }
`;
