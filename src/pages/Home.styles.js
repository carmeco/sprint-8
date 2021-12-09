import styled, { css } from "styled-components";

const button = css`
    border: none;
    border-radius: 5px;
    background-color: var(--yellow);
    opacity: 0.5;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;

export const Carousel = styled.div`
    background-color: var(--darkGrey);
    position: relative;
    width: 100%;
    height: 650px;
`;

export const Slide = styled.div`
    height: 100%;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    display: flex;
    align-items: flex-end;
    padding: 2rem;
`;

export const Content = styled.div`
    color: white;
    max-width: 700px;
    padding: 0.8rem;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);

    h2 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 0.2rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
    }

    button {
        ${button};
        padding: 0.5rem 1rem;
    }
`;

export const Button = styled.button`
    ${button};
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    left: ${({ right }) => right ?? "2rem"};
    right: ${({ left }) => left ?? "2rem"};
`;
