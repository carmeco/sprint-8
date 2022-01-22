import styled from "styled-components";

export const List = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;

    a {
        background-color: var(--darkGrey);
        padding: 1.5rem;

        p:first-child {
            padding-bottom: 0.5rem;
            text-transform: uppercase;
        }

        &:hover {
            cursor: pointer;
            outline: 2px solid var(--yellow);
        }
    }
`;

export const Spinner = styled.img`
    margin: auto;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
