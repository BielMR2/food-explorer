import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 12px 24px;
    gap: 8px;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`