import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-height: 3.5rem;
    max-width: 12.37rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0.75rem 2rem;
    gap: 8px;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > svg {
        width: 2rem; height: 2rem;
    }

    > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
`