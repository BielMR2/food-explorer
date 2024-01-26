import styled from "styled-components";

export const Container = styled.button`
    min-width:12.9375rem;

    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 6px;

    padding: 0.75rem 2rem;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`