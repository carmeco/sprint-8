import styled from "styled-components";

export const List = styled.ul`
    background-color: black;
    border-top: 1px solid var(--midGrey);
    border-bottom: 1px solid var(--midGrey);
    display: flex;
    justify-content: center;

    li {
        padding: 1rem 2rem;
        border-left: 1px solid var(--midGrey);
        text-transform: uppercase;

        &:last-child {
            border-right: 1px solid var(--midGrey);
        }
    }
`;
