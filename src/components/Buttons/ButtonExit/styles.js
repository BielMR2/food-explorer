import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    > svg {
        width: 2rem;
        height: 2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }
`