import styled from "styled-components";

export const List = styled.ul`
    display: flex;

    li {
        padding: 0.5rem;
        text-transform: uppercase;
        color: var(--midGrey);

        &:first-child,
        &:last-child {
            color: var(--lightGrey);
        }
    }
`;
