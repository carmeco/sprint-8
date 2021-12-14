import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        border-bottom: 2px solid var(--yellow);
    }

    p {
        padding: 1rem;
        text-align: center;
    }
`;
