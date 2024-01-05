import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    display: flex;
    flex-direction: row;

    > svg {
        width: 32px;
        height: 32px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300}
    }
`