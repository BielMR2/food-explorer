import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    > svg {
        width: 32px;
        height: 32px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }
`