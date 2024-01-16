import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 0.75rem 1.5rem;
    gap: 8px;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`