import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    display: flex;
    flex-direction: row;

    > svg {
        width: 2rem;
        height: 2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300}
    }
`