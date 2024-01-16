import styled from "styled-components";

export const Container = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: Poppins;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        padding: 0 0 1.5rem 1.5rem;
    }

    > div {
        padding-bottom: 1.5rem;
    }
`