import styled from "styled-components";

export const Container = styled.button`
    min-width:207px;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

    padding: 12px 32px;
    gap: 8px;

    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > p {
        flex-wrap: nowrap;
    }
`